export const extUrls = {
  github: 'https://github.com/luke2327',
  etherscan:
    'https://etherscan.io/address/0xd7346076Fc649A3E52E379F31d9c9Fb35f08d5Cb',
  foundation: 'https://foundation.app/@Luke2327',
  fmawo: 'https://fmawo.com',
  aimyon: 'https://ai-myon.com',
  tuki: 'https://www.tuki.jp',
};

export const extLinks = [
  {
    head: 'GitHub',
    url: extUrls.github,
    // title: '@luke2327',
    title: extUrls.github,
    hide: process.env.NODE_ENV === 'development' && false
  },
  // {
  //   head: 'Etherscan',
  //   url: extUrls.etherscan,
  //   title: 'luke2327.eth',
  // },
  {
    head: 'Fmawo',
    url: extUrls.fmawo,
    // title: 'Fmawo - blog',
    title: extUrls.fmawo,
  },
  {
    head: 'AIMYON',
    url: extUrls.aimyon,
    // title: 'AIMYON',
    title: extUrls.aimyon,
    hide: process.env.NODE_ENV === 'development' && false
  },
  {
    head: 'tuki.',
    url: extUrls.tuki,
    title: extUrls.tuki,
    hide: process.env.NODE_ENV === 'development' && false
  },
  // {
  //   head: 'Foundation',
  //   url: extUrls.foundation,
  //   // title: '@luke2327',
  //   title: extUrls.foundation,
  // },
];
