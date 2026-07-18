import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Accessibility Statement for C&B Mechanical & Gas.",
};

export default function AccessibilityStatementPage() {
  return (
    <LegalPage eyebrow="Accessibility" title="Accessibility Statement">
      <p>C&amp;B Mechanical &amp; Gas aims to provide a website that is clear, usable, and accessible for visitors using a range of devices and assistive technologies.</p>
      <h2>Our Approach</h2>
      <p>The site uses readable text, responsive layouts, descriptive image alt text, keyboard-accessible links, and reduced-motion support where applicable.</p>
      <h2>Ongoing Improvements</h2>
      <p>Accessibility is an ongoing effort. As the website changes, C&amp;B will continue working to improve usability and clarity.</p>
      <h2>Need Help?</h2>
      <p>If you have trouble using the website or need information in another format, please call 208-972-2102.</p>
    </LegalPage>
  );
}
