import { Header, Title } from './AppBar.styled';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { Box } from 'components/Box/Box';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Title to="/">Phonebook</Title>
      <Navigation />
      <Box display="flex" flexDirection="column" alignItems="end" gridGap={3}>
        {!isLoggedIn ? <AuthMenu /> : <UserMenu />}
         <ThemeSwitcher />
      </Box>
    </Header>
  );
};
