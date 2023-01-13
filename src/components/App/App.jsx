import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'components/GlobalStyles/GlobalStyles';
import { darkTheme, lightTheme } from 'services/themes';
import { refresh } from 'redux/Auth/authOperations';
import { Box } from 'components/Box/Box';
import { Layout } from 'components/Layout/Layout';
import { useAuth } from 'hooks';
import { RescrictedRoute, PrivateRoute } from 'components/Routs';
import { RotatingLines } from 'react-loader-spinner';

const Home = lazy(() => import('Pages/HomePage/HomePage'));
const Contacts = lazy(() => import('Pages/ContactsPage/ContactsPage'));
const Login = lazy(() => import('Pages/LoginPage/LoginPage'));
const Register = lazy(() => import('Pages/RegisterPage/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, userTheme } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <ThemeProvider theme={userTheme === 'Dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      {isRefreshing ? (
        <RotatingLines
          strokeColor="#373e67"
          strokeWidth="2"
          animationDuration="0.75"
          width="60"
          visible={true}
        />
      ) : (
        <Box
          display="flex"
          justifyContent="center"
            alignContent="start"
            minHeight="100vh"
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="login"
                element={
                  <RescrictedRoute
                    component={<Login />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="register"
                element={
                  <RescrictedRoute
                    component={<Register />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute component={<Contacts />} redirectTo="/login" />
                }
              />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
          <Toaster />
        </Box>
      )}
    </ThemeProvider>
  );
};
