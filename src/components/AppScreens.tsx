import type { CSSProperties, ReactNode } from "react";
import { landingCopy } from "@/content/landing";

// 랜딩의 앱 화면 그림. 실제 캡처가 아니라 앱 화면을 단순화한 장식이다.
// 스크린 리더에는 숨기고, 같은 내용은 각 카드의 제목·설명 글이 말한다.

export function Phone({ children, className }: Readonly<{ children: ReactNode; className?: string }>) {
  return (
    <div className={className ? `phone ${className}` : "phone"} aria-hidden="true">
      <div className="phone-screen">
        <div className="phone-status">
          <span>9:41</span>
          <span className="phone-island" />
          <span className="phone-battery" />
        </div>
        {children}
        <span className="phone-home" />
      </div>
    </div>
  );
}

export function CaseScreen() {
  const { name, meta, cells } = landingCopy.caseScreen;
  return (
    <Phone>
      <div className="scr-head">
        <span className="scr-title">{name}</span>
        <span className="scr-meta">{meta}</span>
      </div>
      <ol className="scr-grid">
        {cells.map((cell, index) => (
          <li key={index} className={cell ? (cell.focus ? "is-focus" : "is-filled") : "is-empty"}>
            {cell ? (
              <>
                <span className="cell-label">{cell.label}</span>
                <span className="cell-role">{cell.role}</span>
              </>
            ) : (
              <span className="cell-empty">+</span>
            )}
          </li>
        ))}
      </ol>
    </Phone>
  );
}

export function CaseSizes() {
  return (
    <ul className="sizes" aria-hidden="true">
      {landingCopy.sizes.cases.map((item) => {
        const total = item.cols * item.rows;
        const style = { "--cols": item.cols } as CSSProperties;
        return (
          <li key={item.name}>
            <div className="size-case" style={style}>
              {Array.from({ length: total }, (_, index) => (
                <span key={index} className={index < item.filled ? "is-filled" : undefined} />
              ))}
            </div>
            <span className="size-name">{item.name}</span>
            <span className="size-meta">
              {item.cols}×{item.rows}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function SlotScreen() {
  const { screen } = landingCopy.slot;
  return (
    <Phone>
      <p className="scr-where">{screen.where}</p>
      <div className="scr-chip">{screen.depth}</div>
      <p className="scr-big">{screen.label}</p>
      <dl className="scr-rows">
        {screen.rows.map((row) => (
          <div key={row.term}>
            <dt>{row.term}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
      <div className="scr-buttons">
        <span>편집</span>
        <span>카드 추가</span>
      </div>
    </Phone>
  );
}

export function SlotStack() {
  return (
    <ol className="stack" aria-hidden="true">
      {landingCopy.slot.stack.map((label, index) => (
        <li key={label} style={{ "--i": index } as CSSProperties}>
          <span className="stack-no">{index + 1}</span>
          {label}
        </li>
      ))}
    </ol>
  );
}

export function SearchScreen() {
  const { query, results } = landingCopy.search;
  return (
    <Phone>
      <div className="scr-search">
        <span className="scr-search-icon" />
        {query}
      </div>
      <p className="scr-count">결과 {results.length}개</p>
      <ul className="scr-results">
        {results.map((item) => (
          <li key={item.label}>
            <span className="cell-label">{item.label}</span>
            <span className="scr-meta">{item.where}</span>
          </li>
        ))}
      </ul>
    </Phone>
  );
}
