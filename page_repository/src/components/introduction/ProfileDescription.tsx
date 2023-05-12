import styled from 'styled-components';

import { extUrls } from '@/constants/externalLinks';

type IProfileDescriptionProps = {
  className: string;
};

export default function ProfileDescription({
  className,
}: IProfileDescriptionProps) {
  return (
    <ProfileDescriptionWrapper className={className}>
      <div>
        <ProfileHeading
          role={'heading'}
          aria-label={'name'}
          className={'profile-heading'}
        >
          Luke2327
        </ProfileHeading>
        <ProfileParagraph aria-label={'jobs'}>
          Product-focused Fullstack Developer
        </ProfileParagraph>
        <ProfileAnchor
          aria-label={`link: ${extUrls.etherscan}`}
          href={extUrls.etherscan}
        >
          luke2327.eth
        </ProfileAnchor>
      </div>
    </ProfileDescriptionWrapper>
  );
}

const ProfileDescriptionWrapper = styled.div`
  grid-column: span 3 / span 3;
  margin-bottom: var(--luke2327-space-14);
`;

const ProfileHeading = styled.h1`
  font-size: var(--luke2327-fontSizes-lg);
  font-family: var(--luke2327-fonts-heading);
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 480px) {
    line-height: 1.2;
  }
`;

const ProfileParagraph = styled.p``;
const ProfileAnchor = styled.a`
  cursor: pointer;
  -webkit-text-decoration: none;
  text-decoration: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
  opacity: 0.5;
`;
