import { useLocation } from 'react-router-dom';
import { NavItem } from './AuthMenu.styled';

export const AuthMenu = () => {
  const { pathname } = useLocation();
  const { path, text } = pathname === '/register' ? { path: "login", text: 'Log in' } : { path: "register", text: 'Sign in' };

  return (
    <NavItem to={path}>{text}</NavItem>
  );
};