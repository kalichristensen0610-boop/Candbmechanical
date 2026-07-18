import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Transparency Policy",
  description: "Transparency Policy for C&B Mechanical & Gas.",
};

export default function TransparencyPolicyPage() {
  return (
    <LegalPage eyebrow="Transparency" title="Transparency Policy">
      <p>C&amp;B Mechanical &amp; Gas believes customers deserve clear communication, honest recommendations, and practical information before making decisions about their property.</p>
      <h2>Project Communication</h2>
      <p>C&amp;B works to explain project needs, available options, timing, and next steps in plain language. Final project details are confirmed directly with the customer.</p>
      <h2>Service Information</h2>
      <p>Website content describes common services and project types. Actual recommendations depend on the property, equipment, fuel source, code requirements, and project scope.</p>
      <h2>Reviews and Testimonials</h2>
      <p>Review links direct visitors to Google. C&amp;B does not manually create or fabricate customer reviews.</p>
      <h2>Website Credit</h2>
      <p>This website was developed by Christensen &amp; Co. Agency.</p>
    </LegalPage>
  );
}
