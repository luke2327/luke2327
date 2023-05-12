import styled from 'styled-components';

import {
  associateDelivers,
  associateShops,
} from '@/constants/associateCompanyList';

export default function LinkCard() {
  return (
    <>
      <AssociateCompanyListWrapper role={'row'}>
        <AssociateTitle>
          <AssociateTitleText
            aria-label={`heading: Shop`}
            className={'link-title-text'}
          >
            Shop
          </AssociateTitleText>
        </AssociateTitle>
        <AssociateDescription>
          <p className={'flex'}>{associateShops.join(' • ')}</p>
        </AssociateDescription>
        <AssociateTitle>
          <AssociateTitleText
            aria-label={`heading: Delivery`}
            className={'link-title-text'}
          >
            Delivery
          </AssociateTitleText>
        </AssociateTitle>
        <AssociateDescription>
          <p className={'flex'}>{associateDelivers.join(' • ')}</p>
        </AssociateDescription>
      </AssociateCompanyListWrapper>
    </>
  );
}

const AssociateCompanyListWrapper = styled.div`
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

const AssociateTitle = styled.div`
  grid-column: span 4 / span 4;

  @media screen and (min-width: 480px) {
    grid-column: span 1 / span 1;
  }
`;

const AssociateTitleText = styled.p``;

const AssociateDescription = styled.div`
  grid-column: span 4 / span 4;

  @media screen and (min-width: 480px) {
    grid-column: span 3 / span 3;
  }
`;
