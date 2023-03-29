import styled from 'styled-components';

export const HistoryWrapper = styled.div``;

export const HsHeading = styled.h2`
  font-size: var(--luke2327-fontSizes-md);
  font-family: var(--luke2327-fonts-heading);
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: var(--luke2327-space-10);
`;

export const HsGrid = styled.div`
  display: grid;
  grid-gap: clamp(4px, calc(-5.09px + 2.42vw), 24px);
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  max-width: 1920px;
  padding-inline-start: 0px;
  padding-inline-end: 0px;
  margin-inline-start: auto;
  margin-inline-end: auto;
  margin-bottom: var(--luke2327-space-10);
`;

export const HsPeriod = styled.p`
  grid-column: span 4 / span 4;

  @media screen and (min-width: 480px) {
    grid-column: span 1 / span 1;
  }
`;

export const HsCard = styled.div`
  grid-column: span 4 / span 4;

  @media screen and (min-width: 480px) {
    grid-column: span 3 / span 3;
  }
`;

export const HsAnchor = styled.a`
  font-family: var(--luke2327-fonts-heading);
  font-weight: 400;
  font-size: var(--luke2327-fontSizes-md);
  line-height: 1.2;
  display: flex;
  align-items: center;
`;

export const HsArrowLink = styled.img`
  margin-left: var(--luke2327-space-2);
  transform: translateY(1px);
`;

export const HsDescription = styled.p`
  margin-top: var(--luke2327-space-2);
  margin-bottom: var(--luke2327-space-2);
`;

export const HsSkillStack = styled.p``;
