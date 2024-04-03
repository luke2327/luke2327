import styled from 'styled-components';

import LinkCard from '@/components/link/LinkCard';

export default function Link() {
  return (
    <LinkWrapper id="link" role={'presentation'}>
      <LinkHeading role={'heading'} className={'link-heading text-xl xs:text-lg'}>
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
  line-height: 1.2;
  margin-top: var(--luke2327-space-16);
  margin-bottom: var(--luke2327-space-4);
`;
