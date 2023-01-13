import { NavItem } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';
import { Box } from 'components/Box/Box';
import { FaHome, FaListAlt } from 'react-icons/fa';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box as="nav" display="flex" justifyContent="center" alignContent="start">
      <NavItem to="/">
        <FaHome size='24'/> <Box as="p">Home</Box>
      </NavItem>
      {isLoggedIn && (
        <NavItem to="/contacts">
          <FaListAlt size='24'/> <Box as="p">Contacts</Box>
        </NavItem>
      )}
    </Box>
  );
};
