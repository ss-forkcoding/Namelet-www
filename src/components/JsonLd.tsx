// "<" 를 유니코드 이스케이프로 바꿔 글 내용이 script 태그를 닫지 못하게 한다.
const escapedLt = "\\" + "u003c";

export function JsonLd({ data }: Readonly<{ data: Readonly<Record<string, unknown>> }>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, escapedLt) }}
    />
  );
}
