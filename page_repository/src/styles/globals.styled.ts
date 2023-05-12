import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html.light, html.light body {
    color: var(--luke2327-colors-blackAlpha-700);
    background: var(--luke2327-colors-white-500);
  }

  html.dark, html.dark body {
    color: var(--luke2327-colors-whiteAlpha-700);
    background: var(--luke2327-colors-black-500);
  }

  :is(html.dark) :is(
    #ArrowLink
  ) {
    fill: var(--luke2327-colors-white-500);
  }

  :is(html.light) :is(
    #ArrowLink
  ) {
    fill: var(--luke2327-colors-black-500);
  }


  :is(html.dark) :is(
    h1.profile-heading,
    h2.history-heading,
    h2.description-heading,
    h2.link-heading,
    h2.skill-heading,
    h2.associate-company-heading,
    a.history-anchor,
    a.link-anchor
  ) {
    color: var(--luke2327-colors-white-500);
  }

  :is(html.light) :is(
    h1.profile-heading,
    h2.history-heading,
    h2.description-heading,
    h2.link-heading,
    h2.skill-heading,
    h2.associate-company-heading,
    a.history-anchor,
    a.link-anchor
  ) {
    color: var(--luke2327-colors-black-500);
  }
  
  :is(html.dark) :is(
    p.history-period,
    p.history-skill-stack,
    p.link-title-text
  ) {
    color: var(--luke2327-colors-whiteAlpha-600);
  }

  :is(html.light) :is(
    p.history-period,
    p.history-skill-stack,
    p.link-title-text
  ) {
    color: var(--luke2327-colors-blackAlpha-600);
  }
  
  :is(html.dark) :is(
    img.profile-img
  ) {
    border: 1px solid white;
  }

  :is(html.light) :is(
    img.profile-img
  ) {
    border: 1px solid black;
  }
`;
