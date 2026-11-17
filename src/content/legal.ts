import { appPolicy, feedbackRetention, refundUrl, legal, won, type PolicySection } from "./policy";

export const privacyCopy = {
  eyebrow: "숨김없이 적었습니다",
  title: "개인정보 처리방침",
  lead: `${legal.appName} 앱의 케이스·칸 기록은 아이폰에만 저장되며 저희에게 전송되지 않습니다. 저희가 받는 정보는 의견 양식과 이메일로 보내 주신 내용, 사이트 접속 기록입니다. 광고는 Google AdMob이 처리합니다.`,
  description: `${legal.appName} 앱과 사이트가 다루는 정보, 광고 식별자, 보관 기간, 삭제 요청 방법을 안내합니다.`,
  sections: [
    {
      id: "app",
      title: "앱이 다루는 정보",
      paragraphs: ["앱에는 회원가입이 없습니다. 아래 정보는 아이폰의 앱 저장 공간에만 있으며 저희 서버로 전송되지 않습니다."],
      records: [
        {
          name: "케이스와 칸 기록",
          rows: [
            { label: "내용", value: "케이스 이름, 행·열 크기, 칸 깊이, 칸마다 적은 라벨·역할·매체 종류·용량" },
            { label: "저장 위치", value: "아이폰의 앱 저장 공간. iCloud나 저희 서버로 보내지 않습니다." },
          ],
        },
        {
          name: "구매 상태",
          rows: [
            { label: "내용", value: "광고 제거와 케이스 추가 구매 여부" },
            { label: "쓰는 이유", value: "구매한 기능을 열어 둡니다. 구매 확인은 Apple App Store가 처리합니다." },
          ],
        },
      ],
    },
    {
      id: "ads",
      title: "광고와 광고 식별자",
      paragraphs: [
        `${appPolicy.freeGridMax}×${appPolicy.freeGridMax}보다 큰 케이스를 만들 때 Google AdMob 보상형 광고를 보여 줍니다. 광고 제거를 구매하면 광고를 보여 주지 않습니다.`,
        "광고를 보여 줄 때 Google AdMob이 기기와 광고 관련 정보를 직접 수집합니다. 저희는 이 정보를 받거나 보관하지 않습니다.",
      ],
      records: [
        {
          name: "Google AdMob이 수집하는 정보",
          rows: [
            { label: "항목", value: "IP 주소, 기기 모델과 OS 버전, 광고 노출·클릭 기록, 광고 식별자(IDFA, 허용한 경우만)" },
            { label: "쓰는 이유", value: "광고 표시, 광고 성과 측정, 부정 클릭 방지" },
            { label: "업체 방침", value: "Google 광고 개인정보 안내", href: "https://policies.google.com/technologies/ads" },
          ],
        },
      ],
      items: [
        "앱을 처음 열 때 '앱 추적 투명성' 창이 뜹니다. 허용하지 않아도 모든 기능을 쓸 수 있고, 맞춤 광고 대신 일반 광고가 보입니다.",
        "아이폰 설정 > 개인정보 보호 및 보안 > 추적에서 언제든 바꿀 수 있습니다.",
      ],
    },
    {
      id: "collected",
      title: "저희가 받는 정보",
      paragraphs: ["의견과 이메일에 주민등록번호, 비밀번호, 건강 정보를 적지 말아 주세요."],
      records: [
        {
          name: "의견 양식",
          rows: [
            { label: "받는 항목", value: "의견 종류, 내용, 접수 시각, 보낸 곳(앱 버전 또는 웹), 이메일 주소(선택)" },
            { label: "쓰는 이유", value: "문의 답변과 앱 개선" },
            { label: "보관 기간", value: feedbackRetention },
          ],
        },
        {
          name: "이메일 문의",
          rows: [
            { label: "받는 항목", value: "보낸 사람의 이메일 주소, 메일 내용" },
            { label: "쓰는 이유", value: "문의 답변" },
            { label: "보관 기간", value: feedbackRetention },
          ],
        },
        {
          name: "사이트 접속 기록과 방문 통계",
          rows: [
            { label: "받는 항목", value: "IP 주소, 브라우저 정보, 접속 시각, 본 페이지, 유입 경로, 대략적인 지역" },
            { label: "쓰는 이유", value: "사이트 제공, 오류 확인, 방문 규모 파악" },
            { label: "보관 기간", value: "운영 업체(Vercel)의 기록 보관 기간을 따릅니다. Google Analytics 통계는 최대 14개월 보관합니다." },
          ],
        },
        {
          name: "반복 전송 방지",
          rows: [
            { label: "받는 항목", value: "의견 양식을 보낼 때의 IP 주소" },
            { label: "쓰는 이유", value: "10분에 5회를 넘는 반복 전송을 막습니다." },
            { label: "보관 기간", value: "서버 메모리에 잠시 둡니다. 의견 시트에는 저장하지 않습니다." },
          ],
        },
      ],
    },
    {
      id: "purchase",
      title: "구매 정보와 제3자 제공",
      paragraphs: [
        "앱 안 구매와 환불은 Apple이 처리합니다. 저희는 결제 수단과 Apple 계정 정보를 받지 않습니다.",
        "저희는 이용자의 정보를 팔지 않습니다. 법령이 요구하는 경우를 빼면 다른 회사에 제공하지 않습니다.",
      ],
    },
    {
      id: "vendors",
      title: "처리를 맡기는 곳과 국외 이전",
      paragraphs: ["아래 업체는 미국 회사이며 정보가 국외에서 처리될 수 있습니다."],
      records: [
        {
          name: "Google LLC (미국) · AdMob",
          rows: [
            { label: "맡기는 일", value: "앱 광고 표시와 측정" },
            { label: "이전 항목", value: "위 '광고와 광고 식별자'의 항목" },
            { label: "이전 시점", value: "광고를 불러오고 볼 때 인터넷으로 전송합니다." },
          ],
        },
        {
          name: "Google LLC (미국) · 스프레드시트",
          rows: [
            { label: "맡기는 일", value: "의견 저장" },
            { label: "이전 항목", value: "의견 종류, 내용, 접수 시각, 보낸 곳, 이메일 주소(선택)" },
            { label: "이전 시점", value: "의견을 보낼 때 인터넷으로 전송합니다." },
          ],
        },
        {
          name: "Google LLC (미국) · Analytics",
          rows: [
            { label: "맡기는 일", value: "사이트 방문 통계" },
            { label: "이전 항목", value: "본 페이지, 유입 경로, 기기와 브라우저 정보, 대략적인 지역, 쿠키의 방문자 식별값" },
            { label: "거부 방법", value: "Google Analytics 차단 부가기능", href: "https://tools.google.com/dlpage/gaoptout" },
          ],
        },
        {
          name: "Vercel Inc. (미국)",
          rows: [
            { label: "맡기는 일", value: "사이트 운영과 의견 양식 전달" },
            { label: "이전 항목", value: "사이트 접속 기록, 의견 양식 입력 내용" },
            { label: "업체 방침", value: "Vercel 개인정보 처리방침", href: "https://vercel.com/legal/privacy-policy" },
          ],
        },
      ],
    },
    {
      id: "rights",
      title: "권리 행사와 삭제",
      items: [
        "앱을 삭제하면 아이폰에 있던 케이스·칸 기록이 함께 지워지고 복구할 수 없습니다.",
        `의견과 문의 내용의 열람, 정정, 삭제, 처리 정지는 ${legal.supportEmail} 로 요청해 주세요. 요청을 받은 날부터 10일 안에 답합니다.`,
        "보관 기간이 끝나면 시트의 해당 줄과 메일을 복구할 수 없게 삭제합니다.",
        "만 14세 미만이라면 보호자가 대신 문의해 주세요.",
      ],
    },
    {
      id: "security",
      title: "안전 조치",
      items: ["사이트와 의견 전송은 암호화된 연결(HTTPS)을 씁니다.", "의견 시트에는 비밀 값으로 확인된 요청만 저장합니다."],
    },
    {
      id: "contact",
      title: "문의와 신고",
      records: [
        {
          name: "개인정보 보호 담당",
          rows: [
            { label: "담당", value: `${legal.operator} ${legal.appName} 지원 담당` },
            { label: "이메일", value: legal.supportEmail, href: `mailto:${legal.supportEmail}` },
          ],
        },
      ],
    },
    {
      id: "remedy",
      title: "피해 구제 기관",
      paragraphs: ["개인정보 침해로 도움이 필요하면 아래 기관에 상담할 수 있습니다."],
      items: ["개인정보침해 신고센터: 국번 없이 118", "개인정보 분쟁조정위원회: 1833-6972", "대검찰청: 국번 없이 1301", "경찰청: 국번 없이 182"],
    },
    {
      id: "changes",
      title: "방침 변경",
      paragraphs: ["내용을 바꾸면 이 페이지에 알리고 위의 시행일을 고칩니다."],
    },
  ] satisfies readonly PolicySection[],
} as const;

export const termsCopy = {
  eyebrow: "쓰기 전에 읽어 주세요",
  title: "이용약관",
  lead: `${legal.appName} 앱과 이 사이트를 쓰는 조건입니다. 앱을 내려받아 쓰면 이 약관에 동의한 것으로 봅니다.`,
  description: `${legal.appName} 앱의 무료·유료 기능, 광고, 환불, 데이터 보관 책임을 안내합니다.`,
  sections: [
    {
      id: "service",
      title: "제1조 서비스",
      paragraphs: [
        `${legal.appName}은 SD 카드·microSD 카드·USB 메모리 케이스에 이름을 붙이고 칸마다 어떤 매체가 어떤 용도로 들어 있는지 기록하는 iOS 앱입니다. 운영자는 ${legal.operator}입니다.`,
        "회원가입 없이 쓸 수 있으며, 기록은 이용자의 아이폰에만 저장됩니다.",
      ],
    },
    {
      id: "free-paid",
      title: "제2조 무료 기능과 유료 상품",
      records: [
        {
          name: "무료",
          rows: [
            { label: "케이스", value: `${appPolicy.freeCaseCount}개까지` },
            { label: "크기", value: `${appPolicy.freeGridMax}×${appPolicy.freeGridMax}까지. 더 큰 케이스(최대 ${appPolicy.gridMax}×${appPolicy.gridMax})는 저장할 때마다 보상형 광고 1편을 끝까지 보면 만들 수 있습니다.` },
          ],
        },
        {
          name: "케이스 추가",
          rows: [
            { label: "가격", value: `1개당 ${won(appPolicy.caseSlotPriceWon)} (부가세 포함, App Store 표시 가격 기준)` },
            { label: "내용", value: `무료 ${appPolicy.freeCaseCount}개를 넘는 케이스 자리를 1개씩 엽니다. 최대 ${appPolicy.maxCaseCount}개까지 구매할 수 있습니다. 케이스를 지워도 구매한 자리는 남습니다.` },
          ],
        },
        {
          name: "광고 제거",
          rows: [
            { label: "가격", value: `${won(appPolicy.adFreePriceWon)} (부가세 포함, App Store 표시 가격 기준)` },
            { label: "내용", value: `광고 없이 ${appPolicy.freeGridMax}×${appPolicy.freeGridMax}보다 큰 케이스를 만듭니다.` },
          ],
        },
      ],
      items: [
        "두 상품 모두 한 번 구매하면 계속 쓰는 상품입니다. 같은 Apple 계정이면 설정의 '구매 복원'으로 다른 기기에서도 다시 엽니다.",
        "가격은 국가와 환율에 따라 App Store에서 다르게 표시될 수 있습니다.",
      ],
    },
    {
      id: "refund",
      title: "제3조 결제와 환불",
      paragraphs: ["결제는 Apple App Store가 처리합니다. 환불은 Apple의 정책에 따라 Apple 문제 신고 페이지에서 요청합니다."],
      records: [{ name: "환불 요청", rows: [{ label: "Apple 문제 신고", value: "reportaproblem.apple.com", href: refundUrl }] }],
    },
    {
      id: "ads",
      title: "제4조 광고",
      paragraphs: ["광고는 Google AdMob이 제공합니다. 광고 내용과 광고주의 상품에 대한 책임은 광고주에게 있습니다. 광고가 불러와지지 않으면 큰 케이스를 저장할 수 없으며, 이때는 네트워크를 확인하거나 광고 제거를 구매해 주세요."],
    },
    {
      id: "data",
      title: "제5조 기록의 보관",
      notice: "기록은 이 아이폰에만 저장됩니다. 앱을 삭제하거나 기기를 잃어버리면 기록을 복구할 수 없습니다.",
      paragraphs: ["운영자는 이용자의 기록을 보관하지 않으므로 복구해 드릴 수 없습니다. 중요한 기록은 따로 적어 두세요."],
    },
    {
      id: "conduct",
      title: "제6조 금지 행위",
      items: ["앱을 역설계·변조해 유료 기능을 우회하는 행위", "광고를 부정하게 노출·클릭하는 행위", "의견 양식으로 스팸이나 타인의 개인정보를 보내는 행위"],
    },
    {
      id: "liability",
      title: "제7조 책임의 제한",
      paragraphs: [
        "운영자는 앱을 성실하게 제공합니다. 다만 이용자가 적은 기록의 정확성, 매체 자체의 고장이나 분실로 생긴 손해는 책임지지 않습니다.",
        "운영자의 고의나 중대한 과실로 생긴 손해는 관련 법령에 따라 책임집니다.",
      ],
    },
    {
      id: "changes",
      title: "제8조 약관 변경",
      paragraphs: ["약관을 바꾸면 시행 7일 전에 이 페이지에 알립니다. 이용자에게 불리한 변경은 30일 전에 알립니다."],
    },
    {
      id: "law",
      title: "제9조 준거법과 문의",
      paragraphs: [`이 약관은 대한민국 법을 따릅니다. 문의는 ${legal.supportEmail} 로 보내 주세요.`],
    },
  ] satisfies readonly PolicySection[],
} as const;
