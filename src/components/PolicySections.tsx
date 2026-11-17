import type { PolicyRecord, PolicySection } from "@/content/policy";

function Record({ record }: Readonly<{ record: PolicyRecord }>) {
  return (
    <div className="policy-record">
      <h3>{record.name}</h3>
      <dl className="policy-facts">
        {record.rows.map((row) => (
          <div key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.href ? <a href={row.href}>{row.value}</a> : row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function PolicySections({ sections }: Readonly<{ sections: readonly PolicySection[] }>) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.id} className="rail-section" aria-labelledby={`${section.id}-title`}>
          <h2 id={`${section.id}-title`}>{section.title}</h2>
          {section.notice && <p className="policy-notice">{section.notice}</p>}
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.records && (
            <div className="policy-records">
              {section.records.map((record) => (
                <Record key={record.name} record={record} />
              ))}
            </div>
          )}
          {section.items && (
            <ul className="policy-list">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </>
  );
}
