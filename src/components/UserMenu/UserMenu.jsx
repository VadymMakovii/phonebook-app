import { Box } from 'components/Box/Box';
import { Button } from './UserMenu.styled';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/Auth/authOperations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logout());

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gridGap={20}
    >
      <Box as="p" m={0}>
        {user.email}
      </Box>
      <Button type="button" onClick={handleLogOut}>
        Log out
      </Button>
    </Box>
  );
};
