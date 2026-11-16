<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

function field($name) {
  $value = $_POST[$name] ?? '';
  return is_string($value) ? trim($value) : '';
}

$name = field('name');
$phone = field('phone');
$email = field('email');
$service = field('service');
$location = field('location');
$message = field('message');

if ($name === '' || $phone === '' || $email === '' || $service === '' || $location === '' || $message === '') {
  http_response_code(400);
  echo json_encode(['error' => 'Missing required fields']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['error' => 'Invalid email']);
  exit;
}

function verify_estimate_token($token) {
  $secret = getenv('TURNSTILE_SECRET_KEY');
  if (!$secret || $token === '' || strlen($token) > 2048 || !function_exists('curl_init')) {
    return false;
  }

  $request = curl_init('https://challenges.cloudflare.com/turnstile/v0/siteverify');
  curl_setopt_array($request, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query(['secret' => $secret, 'response' => $token]),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 5,
  ]);
  $body = curl_exec($request);
  $status = curl_getinfo($request, CURLINFO_RESPONSE_CODE);
  curl_close($request);

  $result = is_string($body) && $status === 200 ? json_decode($body, true) : null;
  $allowed = getenv('TURNSTILE_ALLOWED_HOSTNAMES') ?: 'candbmechanicalandgas.com,www.candbmechanicalandgas.com';
  $hostnames = array_map('trim', explode(',', $allowed));
  return ($result['success'] ?? false) === true &&
    ($result['action'] ?? '') === 'estimate' &&
    in_array($result['hostname'] ?? '', $hostnames, true);
}

if (!verify_estimate_token(field('cf-turnstile-response'))) {
  http_response_code(403);
  echo json_encode(['error' => 'Verification failed']);
  exit;
}

$to = 'Gary@CandBMechanical.com, Kalichristensen0610@gmail.com';
$subject = 'New C&B estimate request from ' . $name;
$body = implode("\n", [
  'New website estimate request',
  '',
  'Name: ' . $name,
  'Phone: ' . $phone,
  'Email: ' . $email,
  'Service requested: ' . $service,
  'Property/project location: ' . $location,
  'Submitted: ' . date('F j, Y g:i A'),
  '',
  'Message:',
  $message,
]);

$headers = [
  'From: C&B Website <no-reply@candbmechanicalandgas.com>',
  'Reply-To: ' . $email,
  'Content-Type: text/plain; charset=UTF-8',
  'X-Mailer: PHP/' . phpversion(),
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
  http_response_code(500);
  echo json_encode(['error' => 'Email delivery failed']);
  exit;
}

echo json_encode(['ok' => true]);
