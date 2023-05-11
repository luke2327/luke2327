import styled from 'styled-components';

import { extLinks } from '@/constants/externalLinks';

export default function LinkCard() {
  return (
    <>
      {extLinks.map(({ head, title, url }, idx) => (
        <LinkCardWrapper role={'row'} aria-rowindex={idx} key={idx}>
          <LinkTitle>
            <LinkTitleText
              aria-label={`heading: ${head}`}
              className={'link-title-text'}
            >
              {head}
            </LinkTitleText>
          </LinkTitle>
          <LinkDescription>
            <LinkAnchor
              aria-label={`title: ${title}`}
              className={'link-anchor'}
              href={url}
            >
              {title}
              <LinkArrowLink
                width={14}
                height={14}
                src={`/images/dark/arrow-link.svg`}
                alt={`link: ${url}`}
              />
            </LinkAnchor>
          </LinkDescription>
        </LinkCardWrapper>
      ))}
    </>
  );
}

const LinkCardWrapper = styled.div`
  display: grid;
  grid-gap: clamp(4px, calc(-5.09px + 2.42vw), 24px);
  grid-template-columns: repeat(4, 1fr);
  max-width: 1920px;
  padding-inline-start: 0;
  padding-inline-end: 0;
  width: 100%;
  margin-inline-start: auto;
  margin-inline-end: auto;
  margin-bottom: var(--luke2327-space-4);
`;

const LinkTitle = styled.div`
  grid-column: span 4 / span 4;

  @media screen and (min-width: 480px) {
    grid-column: span 1 / span 1;
  }
`;

const LinkTitleText = styled.p``;

const LinkDescription = styled.div`
  grid-column: span 4 / span 4;

  @media screen and (min-width: 480px) {
    grid-column: span 3 / span 3;
  }
`;

const LinkAnchor = styled.a`
  font-family: var(--luke2327-fonts-heading);
  font-weight: 400;
  font-size: var(--luke2327-fontSizes-md);
  line-height: 1.2;
  display: flex;
  align-items: center;
`;

const LinkArrowLink = styled.img`
  margin-left: var(--luke2327-space-2);
  transform: translateY(1px);
`;
