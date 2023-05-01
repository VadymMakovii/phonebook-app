import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper, Footer, Main } from './Layout.styled';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />
      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </Wrapper>
  );
};
