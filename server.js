const { createServer } = require("node:http");
const { createReadStream, existsSync } = require("node:fs");
const { readFile } = require("node:fs/promises");
const { extname, join, normalize } = require("node:path");
const tls = require("node:tls");
const net = require("node:net");

const port = Number(process.env.PORT || 3000);
const root = process.cwd();
const publicDir = existsSync(join(root, ".next", "index.html")) ? join(root, ".next") : join(root, "out");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".php": "text/plain; charset=utf-8",
};

createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);

    if (request.method === "POST" && url.pathname === "/contact.php") {
      await handleContact(request, response);
      return;
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      sendJson(response, 405, { error: "Method not allowed" });
      return;
    }

    serveStatic(url.pathname, request, response);
  } catch (error) {
    console.error(error);
    sendJson(response, 500, { error: "Server error" });
  }
}).listen(port, () => {
  console.log(`C&B static site serving ${publicDir} on port ${port}`);
});

function serveStatic(pathname, request, response) {
  const cleanPath = decodeURIComponent(pathname).replace(/^\/+/, "");
  const candidates = [];

  if (!cleanPath || cleanPath.endsWith("/")) {
    candidates.push(join(publicDir, cleanPath, "index.html"));
  } else {
    candidates.push(join(publicDir, cleanPath));
    candidates.push(join(publicDir, cleanPath, "index.html"));
    candidates.push(join(publicDir, `${cleanPath}.html`));
  }

  const filePath = candidates.find((candidate) => {
    const normalized = normalize(candidate);
    return normalized.startsWith(publicDir) && existsSync(normalized);
  });

  if (!filePath) {
    response.writeHead(404, { "Content-Type": mimeTypes[".html"] });
    createReadStream(join(publicDir, "404.html")).pipe(response);
    return;
  }

  response.writeHead(200, {
    "Content-Type": mimeTypes[extname(filePath).toLowerCase()] || "application/octet-stream",
    "Cache-Control": filePath.includes(`${join(publicDir, "_next")}`) ? "public, max-age=31536000, immutable" : "public, max-age=0, must-revalidate",
  });

  if (request.method === "HEAD") {
    response.end();
    return;
  }

  createReadStream(filePath).pipe(response);
}

async function handleContact(request, response) {
  const fields = await readFields(request);
  const required = ["name", "phone", "email", "service", "location", "message"];
  const missing = required.some((field) => !String(fields[field] || "").trim());

  if (missing) {
    sendJson(response, 400, { error: "Missing required fields" });
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(fields.email))) {
    sendJson(response, 400, { error: "Invalid email" });
    return;
  }

  try {
    await sendMail(fields);
    sendJson(response, 200, { ok: true });
  } catch (error) {
    console.error("Contact form email failed:", error.message);
    sendJson(response, 500, { error: "Email delivery failed" });
  }
}

async function readFields(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  const body = Buffer.concat(chunks);
  const contentType = request.headers["content-type"] || "";

  if (contentType.includes("application/json")) {
    return JSON.parse(body.toString("utf8") || "{}");
  }

  if (contentType.includes("application/x-www-form-urlencoded")) {
    return Object.fromEntries(new URLSearchParams(body.toString("utf8")));
  }

  const boundary = contentType.match(/boundary=(?:"([^"]+)"|([^;]+))/)?.[1] || contentType.match(/boundary=(?:"([^"]+)"|([^;]+))/)?.[2];
  if (!boundary) return {};

  const fields = {};
  const parts = body.toString("binary").split(`--${boundary}`);
  for (const part of parts) {
    const name = part.match(/name="([^"]+)"/)?.[1];
    if (!name) continue;
    const value = part.split("\r\n\r\n").slice(1).join("\r\n\r\n").replace(/\r\n--$/, "").replace(/\r\n$/, "");
    fields[name] = Buffer.from(value, "binary").toString("utf8").trim();
  }
  return fields;
}

function sendMail(fields) {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const portNumber = Number(process.env.SMTP_PORT || 465);
  const secure = String(process.env.SMTP_SECURE || "true") === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.CONTACT_FROM_EMAIL || `C&B Website <${user || "no-reply@candbmechanicalandgas.com"}>`;
  const to = process.env.CONTACT_TO_EMAILS || "Gary@CandBMechanical.com,Kalichristensen0610@gmail.com";

  if (!user || !pass) {
    throw new Error("Missing SMTP_USER or SMTP_PASS environment variable.");
  }

  const subject = `New C&B estimate request from ${fields.name}`;
  const body = [
    "New website estimate request",
    "",
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Email: ${fields.email}`,
    `Service requested: ${fields.service}`,
    `Property/project location: ${fields.location}`,
    `Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/Boise" })}`,
    "",
    "Message:",
    fields.message,
  ].join("\n");

  const message = [
    `From: ${sanitizeHeader(from)}`,
    `To: ${sanitizeHeader(to)}`,
    `Reply-To: ${sanitizeHeader(fields.email)}`,
    `Subject: ${sanitizeHeader(subject)}`,
    "Content-Type: text/plain; charset=UTF-8",
    "",
    body,
  ].join("\r\n");

  return smtpSend({ host, portNumber, secure, user, pass, from, to, message });
}

function smtpSend({ host, portNumber, secure, user, pass, from, to, message }) {
  return new Promise((resolve, reject) => {
    const socket = secure ? tls.connect(portNumber, host) : net.connect(portNumber, host);
    const sender = extractEmail(from) || user;
    const recipients = to.split(",").map((item) => extractEmail(item) || item.trim()).filter(Boolean);
    const commands = [
      `EHLO ${host}`,
      "AUTH LOGIN",
      Buffer.from(user).toString("base64"),
      Buffer.from(pass).toString("base64"),
      `MAIL FROM:<${sender}>`,
      ...recipients.map((recipient) => `RCPT TO:<${recipient}>`),
      "DATA",
      `${message}\r\n.`,
      "QUIT",
    ];

    let index = 0;
    let buffer = "";

    socket.setEncoding("utf8");
    socket.setTimeout(15000);
    socket.on("error", reject);
    socket.on("timeout", () => {
      socket.destroy();
      reject(new Error("SMTP connection timed out."));
    });
    socket.on("data", (chunk) => {
      buffer += chunk;
      if (!buffer.endsWith("\r\n")) return;
      const code = Number(buffer.slice(0, 3));
      if (code >= 400) {
        socket.destroy();
        reject(new Error(`SMTP rejected command: ${buffer.trim()}`));
        return;
      }
      buffer = "";
      if (index < commands.length) {
        socket.write(`${commands[index++]}\r\n`);
      } else {
        resolve();
      }
    });
  });
}

function sendJson(response, status, payload) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function extractEmail(value) {
  return String(value || "").match(/<([^>]+)>/)?.[1] || String(value || "").trim();
}

function sanitizeHeader(value) {
  return String(value || "").replace(/[\r\n]/g, " ");
}
