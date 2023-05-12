import styled from 'styled-components';

import AssociateCompanyList from '@/components/history/AssociateCompanyList';

export default function AssociateCompany() {
  return (
    <AssociateCompanyWrapper role={'Associate company'}>
      <AssociateCompanyHeading
        role={'heading'}
        className={'associate-company-heading'}
      >
        Associate Company
      </AssociateCompanyHeading>
      <AssociateCompanyList />
    </AssociateCompanyWrapper>
  );
}

const AssociateCompanyWrapper = styled.div`
  margin-bottom: var(--luke2327-space-10);
`;

const AssociateCompanyHeading = styled.h2`
  font-family: var(--luke2327-fonts-heading);
  font-weight: 400;
  font-size: var(--luke2327-fontSizes-md);
  line-height: 1.2;
  margin-top: var(--luke2327-space-14);
  margin-bottom: var(--luke2327-space-10);
`;
