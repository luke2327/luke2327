import styled from 'styled-components';

import ContactCard from '@/components/contact/ContactCard';

export default function Contact() {
  return (
    <ContactWrapper id="contact" role={'presentation'}>
      <ContactHeading role={'heading'} className={'contact-heading text-xl xs:text-lg'}>
        Contact
      </ContactHeading>
      <ContactCard />
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div``;

const ContactHeading = styled.h2`
  font-family: var(--luke2327-fonts-heading);
  font-weight: 400;
  line-height: 1.2;
  margin-top: var(--luke2327-space-16);
  margin-bottom: var(--luke2327-space-4);
`;
