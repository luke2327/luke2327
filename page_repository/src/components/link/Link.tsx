import styled from 'styled-components';

import LinkCard from '@/components/link/LinkCard';

export default function Link() {
  return (
    <LinkWrapper role={'presentation'}>
      <LinkHeading role={'heading'} className={'link-heading'}>
        Link
      </LinkHeading>
      <LinkCard />
    </LinkWrapper>
  );
}

const LinkWrapper = styled.div``;

const LinkHeading = styled.h2`
  font-family: var(--luke2327-fonts-heading);
  font-weight: 400;
  font-size: var(--luke2327-fontSizes-md);
  line-height: 1.2;
  margin-top: var(--luke2327-space-14);
  margin-bottom: var(--luke2327-space-10);
`;
