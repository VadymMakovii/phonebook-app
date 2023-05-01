import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(Link)`
  align-self: center;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  border-radius: ${p => p.theme.radii.big};
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.normal};
  color: ${p => p.theme.colors.text};
  text-decoration: none;
  outline: transparent;
  cursor: pointer;
  scale: 1;
  transition: ${p => p.theme.transitions.all};
  &:hover {
    background-color: ${p => p.theme.colors.secondary};
    border-color: ${p => p.theme.colors.outline};
    color: ${p => p.theme.colors.textActive};
  }
  &:active {
    scale: 0.9;
  }
`;
