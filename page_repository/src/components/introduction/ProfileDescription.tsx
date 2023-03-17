import styled from 'styled-components';

export default function ProfileDescription() {
  return (
    <ProfileDescriptionWrapper>
      <div>
        <ProfileHeading>Wonseok Choi</ProfileHeading>
        <ProfileParagraph>Product-focused Fullstack Developer</ProfileParagraph>
        <ProfileAnchor>luke2327.eth</ProfileAnchor>
      </div>
    </ProfileDescriptionWrapper>
  );
}

const ProfileDescriptionWrapper = styled.div`
  grid-column: span 3 / span 3;
  margin-bottom: var(--luke2327-space-14);
`;

const ProfileHeading = styled.h1`
  font-family: var(--luke2327-fonts-heading);
  font-weight: 400;
  //color: var(--luke2327-colors-white-500);
  font-size: var(--luke2327-fontSizes-lg);
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
  //color: white;
  opacity: 0.5;
`;
