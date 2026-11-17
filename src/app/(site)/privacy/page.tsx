import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PolicySections } from "@/components/PolicySections";
import { privacyCopy } from "@/content/legal";
import { legal } from "@/content/policy";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${privacyCopy.title} — ${site.name}`,
  description: privacyCopy.description,
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return (
    <PageShell>
      <section className="panel">
        <p className="eyebrow">{privacyCopy.eyebrow}</p>
        <h1>{privacyCopy.title}</h1>
        <p className="lead">{privacyCopy.lead}</p>
        <p className="meta">시행일 <time dateTime={legal.effectiveOn}>{legal.effectiveOn}</time></p>
      </section>
      <PolicySections sections={privacyCopy.sections} />
    </PageShell>
  );
}
