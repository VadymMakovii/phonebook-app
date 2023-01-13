import { AuthForm } from 'components/AuthForm/AuthForm';
import { Box } from 'components/Box/Box';

const Register = () => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignContent="center"
    >
      <AuthForm />
    </Box>
  );
};

export default Register;
