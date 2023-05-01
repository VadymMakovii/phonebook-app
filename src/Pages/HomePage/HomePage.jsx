import { Box } from 'components/Box/Box';
import { useAuth } from 'hooks';

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      alignSelf="center"
    >
      <Box as="p" fontWeight="medium" lineHeight="1.25" fontSize="xl">
        {!isLoggedIn
          ? 'Welcome to Phonebook app!!! Here you can store, edit and delete your contacts without worrying about their safety. To work in the application, you must register or log in to the application.'
          : 'We are glad that you are using Phonebook and we hope that you did not have any difficulties using it. We are constantly striving to make the app even better and hope you enjoy it.'}
      </Box>
    </Box>
  );
};

export default Home;
