import type { History } from '@/constants/experienctHistory';

export const spHistory = [
  {
    title: {
      en: 'Chocolat',
    },
    description: {
      en: `A letter to a precious person`,
      ko: '',
      ja: '',
    },
    link: 'https://chocolat.malihua.jp',
    period: '2022 - present',
    skill: [
      { label: 'TS', icon: 'typescript' },
      { label: 'Next', icon: 'nextjs' },
      { label: 'Tailwind', icon: 'tailwind' },
      { label: 'Express', icon: 'expressjs' },
      { label: 'Sequelize', icon: 'sequelize' },
      { label: 'RDS', icon: 'rds' },
      { label: 'ECS', icon: 'ecs' },
    ],
  },
  {
    title: {
      en: 'Legion solver',
    },
    description: {
      en: `MapleStory's complex union system solved at once`,
      ko: '',
      ja: '',
    },
    link: 'https://xenogents.github.io/LegionSolver',
    period: '2021 - 2021',
    skill: [
      { label: 'HTML', icon: 'html' },
      { label: 'CSS', icon: 'css' },
    ],
  },
  {
    title: {
      en: 'Play with me',
    },
    description: {
      en: `Let's play a fun game together`,
      ko: '',
      ja: '',
    },
    period: '2020 - 2021',
    skill: [
      { label: 'TS', icon: 'typescript' },
      { label: 'Next', icon: 'nextjs' },
      { label: 'Serverless', icon: 'serverless' },
      { label: 'MySQL', icon: 'mysql' },
      { label: 'WebSocket', icon: 'socketio' },
    ],
  },
  {
    title: {
      en: 'LMS',
    },
    description: {
      en: `Application that college student assignment management`,
      ko: '',
      ja: '',
    },
    period: '2020 - 2021',
    link: 'https://lms.malihua.jp',
    skill: [
      { label: 'TS', icon: 'typescript' },
      { label: 'React', icon: 'react' },
      { label: 'MaterialUI', icon: 'materialui' },
      { label: 'Express', icon: 'expressjs' },
    ],
  },
  {
    title: {
      en: 'EIM',
    },
    description: {
      en: `Application that Maplestory's all events, boss guide, stats, items analyze...`,
      ko: '',
      ja: '',
    },
    period: '2020 - 2021',
    skill: [
      { label: 'TS', icon: 'typescript' },
      { label: 'MobX', icon: 'mobx' },
      { label: 'Express', icon: 'expressjs' },
      { label: 'RDS', icon: 'rds' },
      { label: 'ECS', icon: 'ecs' },
    ],
  },
] as History[];
