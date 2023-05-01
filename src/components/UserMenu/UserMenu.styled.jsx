import styled from 'styled-components';

export const Button = styled.button`
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
  scale: 1;
  cursor: pointer;
  transition: ${p => p.theme.transitions.all};
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.secondary};
    border-color: ${p => p.theme.colors.outline};
    color: ${p => p.theme.colors.textActive};
  };
   &:active {
    scale: 0.9;
  };
`;
