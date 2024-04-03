import Header from '@/components/layout/Header';
import type { NextPage, NextPageContext } from 'next';

type Props = {
  statusCode?: number;
};

const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <>
      <Header />
      <div className={'flex h-[100vh] w-[100vw] items-center justify-center'}>
        
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </div>
    </>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;