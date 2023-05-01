import { Wrapper } from './Layout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Wrapper>
      <Suspense>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default Layout;
