import React from 'react';

import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';

const Layout: React.FC = () => {
  return (
    <>
      <Header aria-level={1} />
      <Main aria-level={1} />
    </>
  );
};

export default Layout;
