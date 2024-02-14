import styled from 'styled-components';

import { contactLinks } from '@/constants/contactLinks';

export default function ContactCard() {
  return (
    <>
      {contactLinks.map(({ head, title, url, type }, idx) => (
        <ContactCardWrapper role={'row'} aria-rowindex={idx} key={idx}>
          <ContactTitle>
            <ContactTitleText
              aria-label={`heading: ${head}`}
              className={'link-title-text'}
            >
              {head}
            </ContactTitleText>
          </ContactTitle>
          <ContactDescription>
            <ContactAnchor
              aria-label={`title: ${title}`}
              className={'link-anchor cursor-pointer'}
              href={
                type === 'mail'
                ? `mailto:${url}`
                : `tel:${url}`
              }
              target='_blank'
            >
              {title}
              <ContactArrowLink
                width={14}
                height={14}
                src={`/images/dark/arrow-link.svg`}
                alt={`link: ${url}`}
              />
            </ContactAnchor>
          </ContactDescription>
        </ContactCardWrapper>
      ))}
    </>
  );
}

const ContactCardWrapper = styled.div`
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

const ContactTitle = styled.div`
  grid-column: span 4 / span 4;
  @media screen and (min-width: 360px) {
    grid-column: span 1 / span 1;
  }
`;

const ContactTitleText = styled.p``;

const ContactDescription = styled.div`
  grid-column: span 4 / span 4;

  @media screen and (min-width: 360px) {
    grid-column: span 3 / span 3;
  }
`;

const ContactAnchor = styled.a`
  font-family: var(--luke2327-fonts-heading);
  font-weight: 400;
  font-size: var(--luke2327-fontSizes-md);
  line-height: 1.2;
  display: flex;
  align-items: center;
`;

const ContactArrowLink = styled.img`
  margin-left: var(--luke2327-space-2);
  transform: translateY(1px);
`;
