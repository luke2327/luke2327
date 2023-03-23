import Header from '@/components/layout/Header';

export default function Custom404() {
  return (
    <>
      <Header />
      <div className={'flex h-[100vh] w-[100vw] items-center justify-center'}>
        404 - Page Not Found
      </div>
    </>
  );
}
