import Link from "next/link";
import { CaseScreen, CaseSizes, SearchScreen, SlotScreen, SlotStack } from "@/components/AppScreens";
import { BrandMark } from "@/components/BrandMark";
import { StoreCta } from "@/components/StoreCta";
import { landingCopy as copy } from "@/content/landing";
import { legal } from "@/content/policy";
import { appStoreUrl, site } from "@/content/site";
import "./landing.css";

// 짧은 제목을 줄마다 끊어 크게 쌓는다. 줄바꿈 위치를 문구 데이터가 정한다.
function Lines({ lines }: Readonly<{ lines: readonly string[] }>) {
  return lines.map((line) => <span key={line}>{line}</span>);
}

export default function Home() {
  const closing = appStoreUrl ? copy.closing.titleLive : copy.closing.titlePending;
  return (
    <div className="lp">
      <main className="lp-stack">
        <section className="lp-card lp-hero" aria-labelledby="hero-title">
          <header className="lp-bar">
            <Link className="lp-brand" href="/">
              <BrandMark size={28} />
              <span>{site.name}</span>
            </Link>
            <nav aria-label="사이트">
              {copy.nav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          <h1 id="hero-title" className="lp-title">
            <Lines lines={copy.hero.title} />
          </h1>
          <p className="lp-lead">{copy.hero.lead}</p>
          <StoreCta placement="landing_hero" qrPlacement="landing_hero_qr" />
          <div className="lp-figure">
            <CaseScreen />
          </div>
        </section>

        <section className="lp-card is-sky" aria-labelledby="sizes-title">
          <h2 id="sizes-title" className="lp-title">
            <Lines lines={copy.sizes.title} />
          </h2>
          <p className="lp-lead">{copy.sizes.lead}</p>
          <div className="lp-figure">
            <CaseSizes />
          </div>
        </section>

        <section className="lp-card" aria-labelledby="slot-title">
          <h2 id="slot-title" className="lp-title">
            <Lines lines={copy.slot.title} />
          </h2>
          <p className="lp-lead">{copy.slot.lead}</p>
          <div className="lp-figure lp-figure-pair">
            <SlotScreen />
            <SlotStack />
          </div>
        </section>

        <section className="lp-card" aria-labelledby="search-title">
          <h2 id="search-title" className="lp-title">
            <Lines lines={copy.search.title} />
          </h2>
          <p className="lp-lead">{copy.search.lead}</p>
          <div className="lp-figure">
            <SearchScreen />
          </div>
        </section>

        <section className="lp-card lp-promises" aria-labelledby="promises-title">
          <BrandMark size={56} />
          <h2 id="promises-title" className="lp-title">
            {copy.promises.title}
          </h2>
          <ul className="lp-lines">
            {copy.promises.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="lp-note">{copy.promises.note}</p>
        </section>

        <section className="lp-card is-sky" aria-labelledby="facts-title">
          <h2 id="facts-title" className="lp-title lp-title-small">
            {copy.facts.title}
          </h2>
          <dl className="lp-facts">
            {copy.facts.rows.map((row) => (
              <div key={row.term}>
                <dt>{row.term}</dt>
                <dd>{row.detail}</dd>
              </div>
            ))}
          </dl>
          <p className="lp-note">{copy.facts.note}</p>
        </section>

        <section className="lp-card is-vanilla" aria-labelledby="closing-title">
          <h2 id="closing-title" className="lp-title">
            <Lines lines={closing} />
          </h2>
          <StoreCta placement="landing_closing" qrPlacement="landing_closing_qr" />
        </section>
      </main>

      <footer className="lp-stack lp-footer">
        <nav aria-label="정책과 지원" className="lp-stack">
          {copy.links.map((item) => (
            <Link key={item.href} className="lp-card lp-link" href={item.href}>
              {item.label}
            </Link>
          ))}
          <a className="lp-card lp-link" href={`mailto:${legal.supportEmail}`}>
            문의 메일
          </a>
        </nav>
        <div className="lp-card lp-end">
          <BrandMark size={160} />
          <p>{site.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
