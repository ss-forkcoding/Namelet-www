import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogHeader } from "@/components/BlogHeader";
import { JsonLd } from "@/components/JsonLd";
import { PostDate } from "@/components/PostDate";
import { blogLanguages, blogPath, blogPreview, publisher } from "@/content/seo";
import { blogCopy, isLang, site } from "@/content/site";
import { getPosts } from "@/lib/blog";

export async function generateMetadata({ params }: PageProps<"/blog/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const copy = blogCopy[lang];
  return {
    title: `${copy.title} | ${site.name}`,
    description: copy.description,
    alternates: { canonical: blogPath(lang), languages: blogLanguages() },
    ...blogPreview({ lang, path: blogPath(lang), title: copy.title, description: copy.description }),
  };
}

export default async function BlogListPage({ params }: PageProps<"/blog/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const copy = blogCopy[lang];
  const posts = getPosts(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${copy.title} | ${site.name}`,
    description: copy.description,
    inLanguage: lang,
    url: `${site.url}${blogPath(lang)}`,
    author: publisher,
    publisher,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      url: `${site.url}${blogPath(lang, post.slug)}`,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <BlogHeader lang={lang} />
      <section className="blog-intro">
        <h1>{copy.title}</h1>
        <p className="blog-lead">{copy.lead}</p>
      </section>
      <section className="blog-rail" aria-label={copy.title}>
        {posts.length === 0 ? (
          <p className="blog-empty">{copy.empty}</p>
        ) : (
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.slug}>
                <a href={blogPath(lang, post.slug)}>
                  <PostDate date={post.date} lang={lang} />
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
