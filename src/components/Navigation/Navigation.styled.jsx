import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.mainText};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.regular};
  padding: ${p => p.theme.space[3]}px;
  align-self: center;
  text-decoration: none;
  outline: transparent;
  transition: ${p => p.theme.transitions.color};

  ::before {
    content: '';
    scale: 0;
    opacity: 0;
    position: absolute;
    width: 2px;
    height: 50%;
    top: 20%;
    left: 26px;
    transform: translateY(25%) translateX(50%);
    border-radius: ${p => p.theme.radii.big};
    background-color: ${p => p.theme.colors.mainText};
    transition: ${p => p.theme.transitions.all};
  }

  &.active {
    ::before {
      top: 50%;
      scale: 1;
      opacity: 1;
    }
  };

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.mainTextActive};
  };
`;
