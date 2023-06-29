import { Header } from '@/components/domains/singleProject';
import Link from 'next/link';
import React, { Fragment, PropsWithChildren } from 'react';

const ProjectLayout = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};

export default ProjectLayout;
