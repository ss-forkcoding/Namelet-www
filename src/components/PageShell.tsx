import Link from "next/link";
import type { ReactNode } from "react";
import { legal } from "@/content/policy";
import { site } from "@/content/site";
import "./page-shell.css";

const nav = [
  { href: "/support", label: "지원" },
  { href: "/privacy", label: "개인정보 처리방침" },
  { href: "/terms", label: "이용약관" },
] as const;

export function PageShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="shell">
      <header className="shell-header">
        <Link href="/" className="shell-brand">
          {site.name}
        </Link>
        <nav aria-label="사이트">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="shell-main">{children}</main>
      <footer className="shell-footer">
        <p>{site.copyright}</p>
        <p>
          <a href={`mailto:${legal.supportEmail}`}>{legal.supportEmail}</a>
        </p>
      </footer>
    </div>
  );
}
