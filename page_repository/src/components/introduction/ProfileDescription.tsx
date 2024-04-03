import styled from 'styled-components';

import { extUrls } from '@/constants/externalLinks';

export default function ProfileDescription() {
  return (
    <ProfileDescriptionWrapper>
      <div className="hidden xs:block">
        <ProfileHeading
          role={'heading'}
          aria-label={'name'}
          className={'profile-heading'}
        >
          {process.env.NODE_ENV === 'development' && false ? (
            <>Choi wonseok</>
          ) : (
            <>
              Liam
              <span className="text-sm text-gray-light opacity-70">
                (Wonseok Choi)
              </span>
            </>
          )}
        </ProfileHeading>
        <ProfileParagraph aria-label={'jobs'}>
          Product-focused Fullstack Developer
        </ProfileParagraph>
        <ProfileAnchor
          aria-label={`link: ${extUrls.github}`}
          href={extUrls.github}
          className={
            process.env.NODE_ENV === 'development' && false ? '!hidden' : ''
          }
          target="_blank"
        >
          luke2327
        </ProfileAnchor>
      </div>
    </ProfileDescriptionWrapper>
  );
}

const ProfileDescriptionWrapper = styled.div`
  grid-column: span 4 / span 4;
  margin-bottom: var(--luke2327-space-2);
  padding-top: 0;

  @media screen and (min-width: 360px) {
    grid-column: span 3 / span 3;
    margin-bottom: var(--luke2327-space-14);
    padding-top: 1.75rem;
  }
`;

export const ProfileHeading = styled.h1`
  font-size: var(--luke2327-fontSizes-lg);
  font-family: var(--luke2327-fonts-heading);
  font-weight: 400;
  line-height: 1.33;
  display: flex;
  gap: 4px;
  align-items: baseline;

  @media screen and (min-width: 480px) {
    line-height: 1.2;
  }
`;

export const ProfileParagraph = styled.p``;
export const ProfileAnchor = styled.a`
  cursor: pointer;
  -webkit-text-decoration: none;
  text-decoration: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    color: white;
  }
`;
