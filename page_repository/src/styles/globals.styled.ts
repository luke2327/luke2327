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
    h2.experience-heading,
    h2.description-heading,
    h2.link-heading,
    a.experience-anchor,
    a.link-anchor
  ) {
    color: var(--luke2327-colors-white-500);
  }

  :is(html.light) :is(
    h2.experience-heading,
    h2.description-heading,
    h2.link-heading,
    a.experience-anchor,
    a.link-anchor
  ) {
    color: var(--luke2327-colors-black-500);
  }
  
  :is(html.dark) :is(
    p.experience-period,
    p.experience-skill-stack,
    p.link-title-text
  ) {
    color: var(--luke2327-colors-whiteAlpha-600);
  }

  :is(html.light) :is(
    p.experience-period,
    p.experience-skill-stack,
    p.link-title-text
  ) {
    color: var(--luke2327-colors-blackAlpha-600);
  }
`;
