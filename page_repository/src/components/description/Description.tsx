import styled from 'styled-components';

export default function Description() {
  return (
    <DescriptionWrapper>
      <DescriptionHeading
        role={'heading'}
        aria-label={'About'}
        className={'description-heading'}
      >
        About
      </DescriptionHeading>
      <p aria-label={'introduction'}>
        GM, Im Luke2327. I enjoy building dynamic, creative products from start
        to finish. Focused on developing intuitive experiences that constantly
        grow and improve based on user metrics. Always shipping.
      </p>
    </DescriptionWrapper>
  );
}

const DescriptionWrapper = styled.div`
  margin-bottom: var(--luke2327-space-14);
`;

const DescriptionHeading = styled.h2`
  font-size: var(--luke2327-fontSizes-md);
  font-family: var(--luke2327-fonts-heading);
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: var(--luke2327-space-2);
`;
