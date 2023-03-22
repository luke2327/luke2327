export type ExpHistory = {
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
  period: string;
  skill: string[];
  link?: string;
};

export const expHistory = [
  {
    title: {
      en: 'R&D Manager – Eikoline Inc.',
      ko: '',
      ja: '',
    },
    description: {
      en: `Application that handles other parts such as product data, settlement, statistics, inventory, and orders sent to the Sellingtool.`,
      ko: '',
      ja: '',
    },
    period: '2022 - present',
    skill: ['TS', 'Next', 'Nuxt', 'Express', 'Sequelize', 'ECS', 'MySQL'],
    link: 'https://eikoline.com',
  },
  {
    title: {
      en: 'R&D Manager – Linger Corp.',
      ko: '',
      ja: '',
    },
    description: {
      en: 'While managing the music data, I experienced blockchain-related technology and Rust language such as Ativ and Solana.',
      ko: '',
      ja: '',
    },
    period: '2021 - 2022',
    skill: ['TS', 'Next', 'Mobx', 'Serverless', 'Cognito', 'MySQL'],
    link: 'https://www.lingerstudio.com',
  },
  {
    title: {
      en: 'R&D Manager – Playauto Inc.',
      ko: '',
      ja: '',
    },
    description: {
      en: "I gathered the scattered shopping malls in one place and protected the seller's precious time.",
      ko: '',
      ja: '',
    },
    period: '2019 - 2021',
    skill: ['TS', 'Angular', 'Express', 'GraphQL', 'MySQL'],
    link: 'https://www.plto.com',
  },
  {
    title: {
      en: 'Frifee Inc.',
      ko: '',
      ja: '',
    },
    description: {
      en: 'Overseas soccer, baseball, basketball score matching, live linking, line-up, news, and VOD service in 6 languages respectively',
      ko: '',
      ja: '',
    },
    period: '2017 - 2019',
    skill: ['TS', 'Angular', 'React', 'Gatsby', 'Express', 'MySQL'],
  },
] as ExpHistory[];
