import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Website Terms and Conditions for C&B Mechanical & Gas.",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage eyebrow="Terms" title="Terms & Conditions">
      <p>By using this website, you agree to use it for lawful purposes and understand that website content is provided for general informational purposes.</p>
      <h2>Website Information</h2>
      <p>Service descriptions, project examples, and general information are intended to help visitors understand the types of work C&amp;B performs. They do not replace an on-site review, code review, inspection requirement, or written project agreement.</p>
      <h2>Estimates and Service Requests</h2>
      <p>Submitting a form or calling C&amp;B does not create a contract. Project scope, scheduling, pricing, and responsibilities are confirmed separately before work begins.</p>
      <h2>Photos and Content</h2>
      <p>Project photos, text, logos, and website content may not be copied or reused without permission, except as allowed by law.</p>
      <h2>Limitation of Use</h2>
      <p>This website should not be used for emergency instructions. If you suspect a gas leak or immediate safety issue, leave the area and contact the appropriate utility, emergency service, or qualified professional.</p>
    </LegalPage>
  );
}
