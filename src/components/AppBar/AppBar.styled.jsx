import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.mainText};
  background-color: ${p => p.theme.colors.main};
  box-shadow: ${p => p.theme.shadows.main};
  transition: ${p => p.theme.transitions.common};
`;

export const Title = styled(Link)`
  font-size: ${p => p.theme.fontSizes.xxl};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding: ${p => p.theme.space[2]}px;
  align-self: center;
  text-decoration: none;
  outline: transparent;
  color: ${p => p.theme.colors.mainText};
  transition: ${p => p.theme.transitions.color};
  cursor: pointer;
  &:focus,
  &:hover {
    color: ${p => p.theme.colors.mainTextActive};
  };
`;
