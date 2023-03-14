import Head from 'next/head';
import nightwind from 'nightwind/helper';
import React from 'react';

import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';

const Layout: React.FC = () => {
  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
      </Head>
      <Header />
      <Main />
    </>
  );
};

export default Layout;
