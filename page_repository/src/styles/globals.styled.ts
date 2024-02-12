import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html.light, html.light body, html.light body > div {
    color: var(--luke2327-colors-blackAlpha-700);
    background-color: var(--luke2327-colors-white-500);
  }

  html.dark, html.dark body, html.dark body > div {
    color: var(--luke2327-colors-whiteAlpha-700);
    background-color: var(--luke2327-colors-black-500);
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
  
  :is(html.dark) :is(.lucide) {
    stroke: #a3a3a3
  }

  :is(html.light) :is(.lucide) {
    stroke: #717170
  }
  
  header {
    z-index: 2;
    background: inherit;

    @media screen and (min-width: 480px) {
      background: unset;
      z-index: unset;
    }
  }


  :is(html.dark) :is(
    h1.profile-heading,
    h2.history-heading,
    h2.description-heading,
    h2.link-heading,
    h2.skill-heading,
    h2.associate-company-heading,
    a.history-anchor,
    a.link-anchor,
    p.associate-title-text
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
    a.link-anchor,
    p.associate-title-text
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
    border: 0.5px solid white;
  }

  :is(html.light) :is(
    img.profile-img
  ) {
    border: 1px solid black;
  }
`;
