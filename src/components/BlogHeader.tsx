import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { blogCopy, langs, site, type Lang } from "@/content/site";

// 언어를 바꾸면 html lang 이 달라지므로 언어 링크는 전체 페이지 이동(a)을 쓴다.
export function BlogHeader({ lang, slug }: Readonly<{ lang: Lang; slug?: string }>) {
  const suffix = slug ? `/${slug}` : "";
  return (
    <header className="blog-header">
      <Link className="blog-brand" href="/">
        <BrandMark />
        <span>{site.name}</span>
      </Link>
      <nav aria-label={blogCopy[lang].languageNav}>
        {langs.map((item) => (
          <a
            key={item}
            className="blog-nav-link"
            href={`/blog/${item}${suffix}`}
            hrefLang={item}
            lang={item}
            aria-current={item === lang ? "page" : undefined}
          >
            {blogCopy[item].label}
          </a>
        ))}
      </nav>
    </header>
  );
}
