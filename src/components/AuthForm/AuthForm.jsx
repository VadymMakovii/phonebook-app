import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { selectIsLoading } from 'redux/Contacts/contactsSelectors';
import { Button } from 'components/Button/Button';
import { Box } from 'components/Box/Box';
import { register, login } from 'redux/Auth/authOperations';
import {
  Input,
  Label,
  StyledLink,
  StyledForm,
  ShowPasswordBtn,
} from './AuthForm.styled';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const AuthForm = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const validationSchema = yup.object().shape({
    email: yup.string().required('Required').email('Invalid email'),
    password: yup
      .string()
      .required('Required')
      .min(4, 'Too Short! Min 4 symbols!')
      .max(10, 'Too Long! Max 10 symbols!'),
    name:
      pathname === '/register' &&
      yup
        .string()
        .required('Required')
        .min(
          2,
          "It's okay, we won't tell anyone about this. But let's make the name a little longer"
        )
        .max(30, 'Wow!!! Who are you a warrior?!?! Max 30 symbols!'),
  });

  const handleSubmitForm = ({ name, email, password }, { resetForm }) => {
    switch (pathname) {
      case '/register':
        dispatch(register({ name, email, password })).then(({ error }) =>
          error
            ? toast.error(
                'A user with this email address or name is already registered. Please log in or enter a different email address'
              )
            : resetForm()
        );
        break;
      case '/login':
        dispatch(login({ email, password })).then(({ error }) =>
          error
            ? toast.error('Wrong email or password. Try again!')
            : resetForm()
        );
        break;
      default:
        return;
    }
  };

  const { btnTitle, path, text, title } = {
    btnTitle: pathname === '/register' ? 'Sign in' : 'Log in',
    path: pathname === '/register' ? '/login' : '/register',
    text:
      pathname === '/register'
        ? 'Already have an account?'
        : "Don't have an account?",
    title: pathname === '/register' ? 'Log in' : 'Sign in',
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmitForm}
      validationSchema={validationSchema}
      validateOnBlur
    >
      {({ errors, touched, isValid, dirty }) => (
        <StyledForm>
          {pathname === '/register' && (
            <Label htmlFor="name">
              Name
              <Input type="text" name="name" />
              {errors.name && touched.name ? (
                <Box fontSize="xs" color="red" mt={2}>
                  {errors.name}
                </Box>
              ) : null}
            </Label>
          )}
          <Label htmlFor="email">
            Email
            <Input type="email" name="email" />
            {errors.email && touched.email ? (
              <Box fontSize="xs" color="red" mt={2}>
                {errors.email}
              </Box>
            ) : null}
          </Label>
          <Label htmlFor="password">
            Password
            <Input
              type={isShowPassword ? 'text' : 'password'}
              name="password"
            />
            <ShowPasswordBtn
              type="button"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? (
                <FaEyeSlash size="24px" />
              ) : (
                <FaEye size="24px" />
              )}
            </ShowPasswordBtn>
            {errors.password && touched.password ? (
              <Box fontSize="xs" color="red" mt={2}>
                {errors.password}
              </Box>
            ) : null}
          </Label>
          <Button
            type="submit"
            name="button"
            disabled={isLoading || !isValid || !dirty}
          >
            {btnTitle}
          </Button>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            gridGap="2"
          >
            <Box as="p" fontSize="s" m={0} fontWeight="regular" color="text">
              {text}
            </Box>
            <StyledLink to={path}>{title}</StyledLink>
          </Box>
        </StyledForm>
      )}
    </Formik>
  );
};
