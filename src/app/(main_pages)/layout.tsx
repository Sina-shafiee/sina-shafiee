import { Fragment, type PropsWithChildren } from 'react';
import { Header } from '@/components/header';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};

export default MainLayout;
