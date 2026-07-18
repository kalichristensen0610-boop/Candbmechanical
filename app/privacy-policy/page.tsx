import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for C&B Mechanical & Gas.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage eyebrow="Privacy" title="Privacy Policy">
      <p>C&amp;B Mechanical &amp; Gas respects your privacy. This policy explains how information submitted through this website may be collected and used.</p>
      <h2>Information We Collect</h2>
      <p>When you contact C&amp;B through the website, we may collect your name, phone number, email address, project location, selected service, and project details.</p>
      <h2>How Information Is Used</h2>
      <p>Information submitted through the site is used to respond to estimate requests, schedule service conversations, and provide customer support related to heating, cooling, gas piping, propane, and mechanical projects.</p>
      <h2>Sharing Information</h2>
      <p>C&amp;B does not sell personal information. Information may be shared only when needed to respond to your request, operate the website, comply with applicable law, or coordinate project communication you requested.</p>
      <h2>Website Analytics and Hosting</h2>
      <p>The website may use hosting, security, analytics, or performance tools that collect standard technical information such as browser type, device information, page visits, and general usage data.</p>
      <h2>Contact</h2>
      <p>For questions about this policy, contact C&amp;B by calling 208-972-2102.</p>
    </LegalPage>
  );
}
