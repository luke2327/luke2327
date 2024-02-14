import styled from 'styled-components';

import AssociateCompanyList from '@/components/history/AssociateCompanyList';

export default function AssociateCompany() {
  return (
    <AssociateCompanyWrapper id="associate-company" role={'Associate company'}>
      <AssociateCompanyHeading
        role={'heading'}
        className={'associate-company-heading text-xl xs:text-lg'}
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
  line-height: 1.2;
  margin-top: var(--luke2327-space-16);
  margin-bottom: var(--luke2327-space-4);
`;
