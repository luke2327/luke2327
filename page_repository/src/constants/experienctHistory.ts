import { SupportedLanguage } from "./AppConfig";

export type History = {
  title: {
    en: string;
    ko: string;
    ja: string;
  };
  description: {
    en: string;
    ko: string;
    ja: string;
  };
  period: Record<SupportedLanguage, string>;
  skill: string[] | { label: string; icon: string }[];
  link?: string;
  present?: boolean;
  hide?: boolean;
  nav?: Record<SupportedLanguage, string>;
  isJp?: boolean;
};

export const expHistory = [
  {
    title: {
      en: 'Development Leader – Eikoline Inc.',
      ko: '주식회사 에이코라인 / Development Leader',
      ja: '株式会社エイコーライン / Development Leader',
    },
    description: {
      en: `Application that handles other parts such as product data, settlement, statistics, inventory, and orders sent to the Sellingtool.`,
      ko: '국내 및 해외 상품에 대해 판매, 재고, 정산, 주문 등을 처리하는 통합관리 솔루션을 개발하였습니다.',
      ja: '国内及び海外商品に対して販売、在庫、精算、注文などを処理する統合管理ソリューションを開発しました。',
    },
    period: {
      en: '2022 - present',
      ko: '2022 - 현재',
      ja: '2022 - 現在',
    },
    present: true,
    skill: ['TS', 'Next', 'Nuxt', 'Express', 'Sequelize', 'ECS', 'MySQL'],
    link: 'https://eikoline.com',
    nav: {
      en: '/employment-history/e/eikoline',
      ko: '/ko/employment-history/e/eikoline',
      ja: '/ja/employment-history/e/eikoline',
    },
    isJp: true,
  },
  {
    title: {
      en: 'Development Manager – Linger Corp.',
      ko: '주식회사 링거 / Development Manager',
      ja: '株式会社リンガー / Development Manager',
    },
    description: {
      en: 'While managing the music data, I experienced blockchain-related technology and Rust language such as Ativ and Solana.',
      ko: '음악 데이터를 관리 및 Ativ, Solana 등 블록체인 관련 기술과 Rust 언어를 사용하여 음원거래 플랫폼을 개발하였습니다.',
      ja: '音楽データを管理し、Ativ、Solanaなどのブロックチェーン関連技術とRust言語を使用して音源取引プラットフォームを開発しました。',
    },
    period: {
      en: '2021 - 2022',
      ko: '2021 - 2022',
      ja: '2021 - 2022',
    },
    skill: ['TS', 'Next', 'Mobx', 'Serverless', 'Cognito', 'MySQL'],
    link: 'https://www.lingerstudio.com',
    hide: process.env.NODE_ENV === 'development',
    nav: {
      en: '/employment-history/e/linger',
      ko: '/ko/employment-history/e/linger',
      ja: '/ja/employment-history/e/linger',
    },
  },
  {
    title: {
      en: 'Development Leader – Playauto Inc.',
      ko: '주식회사 플레이오토 / Development Leader',
      ja: '株式会社プレーオート / Development Leader',
    },
    description: {
      en: "Developed an integrated e-commerce management solution for domestic and Japanese online sellers.",
      ko: '국내 및 일본 온라인 셀러를 위한 전자상거래 통합관리 솔루션을 개발하였습니다.',
      ja: '国内および日本のオンラインセラーのための電子商取引統合管理ソリューションを開発しました。',
    },
    period: {
      en: '2019 - 2021',
      ko: '2019 - 2021',
      ja: '2019 - 2021',
    },
    skill: ['TS', 'Angular', 'Express', 'GraphQL', 'MySQL'],
    link: 'https://www.plto.com',
    nav: {
      en: '/employment-history/e/playauto',
      ko: '/ko/employment-history/e/playauto',
      ja: '/ja/employment-history/e/playauto',
    },
  },
  {
    title: {
      en: 'Development Manager – Frifee Inc.',
      ko: '주식회사 프라이피 / Development Manager',
      ja: '株式会社フライフィー / Development Manager',
    },
    description: {
      en: 'Overseas soccer, baseball, basketball score matching, live linking, line-up, news, and VOD service in 6 languages respectively.',
      ko: '해외 축구, 야구, 농구 스코어 매칭, 라이브 링크, 라인업, 뉴스, VOD 서비스를 각각 6개 언어로 서비스하였으며, tymX코인을 이용하여 dApp을 개발하였습니다.',
      ja: '海外サッカー ・ 野球 ・ バスケットボールのスコアマッチング、ライブリンク、ラインナップ、ニュース、VODサービスをそれぞれ6つの言語でサービスし、tymXコインを利用してdAppを開発しました。',
    },
    period: {
      en: '2017 - 2019',
      ko: '2017 - 2019',
      ja: '2017 - 2019',
    },
    skill: ['TS', 'Angular', 'React', 'Gatsby', 'Express', 'MySQL'],
    hide: process.env.NODE_ENV === 'development',
  },
] as History[];
