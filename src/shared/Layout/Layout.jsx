import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header/Header.jsx';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h2>Loading</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};
