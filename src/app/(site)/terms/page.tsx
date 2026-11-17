import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PolicySections } from "@/components/PolicySections";
import { termsCopy } from "@/content/legal";
import { legal } from "@/content/policy";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${termsCopy.title} — ${site.name}`,
  description: termsCopy.description,
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <PageShell>
      <section className="panel">
        <p className="eyebrow">{termsCopy.eyebrow}</p>
        <h1>{termsCopy.title}</h1>
        <p className="lead">{termsCopy.lead}</p>
        <p className="meta">시행일 <time dateTime={legal.effectiveOn}>{legal.effectiveOn}</time></p>
      </section>
      <PolicySections sections={termsCopy.sections} />
    </PageShell>
  );
}
