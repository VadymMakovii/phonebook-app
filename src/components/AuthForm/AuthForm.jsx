import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Formik } from 'formik';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { selectIsLoading } from 'redux/Contacts/contactsSelectors';
import { Button } from 'components/Button/Button';
import { Box } from 'components/Box/Box';
import { register, login } from 'redux/Auth/authOperations';
import { ErrorStatus, loginValidationSchema, registerValidationSchema } from '../../helpers';
import {
  Input,
  Label,
  StyledLink,
  StyledForm,
  ShowPasswordBtn,
} from './AuthForm.styled';


export const AuthForm = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleSubmitForm = ({ name, email, password }, { resetForm }) => {
    switch (pathname) {
      case '/register':
        dispatch(register({ name, email, password })).then((res) =>
          res.error
            ? toast.error(ErrorStatus[res.payload])
            : resetForm()
        );
        break;
      case '/login':
        dispatch(login({ email, password })).then((res) =>
          res.error
            ? toast.error(ErrorStatus[res.payload])
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
      validationSchema={pathname === '/register' ? registerValidationSchema : loginValidationSchema}
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
                <FaEye size="24px" />
              ) : (
                <FaEyeSlash size="24px" />
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
