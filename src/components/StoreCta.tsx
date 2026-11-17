import Link from "next/link";
import { StoreBadgeLink } from "@/components/StoreBadgeLink";
import { StoreQr } from "@/components/StoreQr";
import { landingCopy } from "@/content/landing";
import { appStoreUrl, type StorePlacement } from "@/content/site";

type Props = Readonly<{ placement: StorePlacement; qrPlacement: StorePlacement }>;

// 랜딩의 유일한 주 행동. site.ts 의 appStoreUrl 하나로 두 상태를 바꾼다.
// - null: 출시 준비 중임을 글로 알린다. 누를 수 없는 가짜 버튼을 그리지 않는다.
// - 주소 있음: Apple 공식 배지 링크 + 데스크톱용 QR.
export function StoreCta({ placement, qrPlacement }: Props) {
  const copy = landingCopy.store;
  if (!appStoreUrl) {
    return (
      <div className="store-cta store-cta-pending">
        <p className="store-status">
          <span className="store-status-dot" aria-hidden="true" />
          {copy.pendingStatus}
        </p>
        <p className="store-note">
          {copy.pendingNote} <Link href="/blog/ko">{copy.pendingLink}</Link>
        </p>
      </div>
    );
  }
  return (
    <div className="store-cta">
      <StoreBadgeLink href={appStoreUrl} label={copy.badgeLabel} lang="ko" placement={placement} />
      <StoreQr href={appStoreUrl} caption={copy.qrCaption} lang="ko" placement={qrPlacement} />
    </div>
  );
}
