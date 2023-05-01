import styled from 'styled-components';

export const Button = styled.button`
  align-self: center;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  border-radius: ${p => p.theme.radii.big};
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.normal};
  color: ${p => p.theme.colors.text};
  outline: transparent;
  scale: 1;
  cursor: pointer;
  transition: ${p => p.theme.transitions.all};
  &:focus:not(:disabled),
  &:hover:not(:disabled) {
    background-color: ${p => p.theme.colors.secondary};
    border-color: ${p => p.theme.colors.outline};
    color: ${p => p.theme.colors.textActive};
    ${props =>
      props.name === 'delete' &&
      `background-color: #ff4848cd; color: #ffffff; border-color: #ff0000`};
    ${props =>
      props.name === 'cancel' &&
      `background-color: #ff4848cd; color: #ffffff; border-color: #ff0000`};
  }
  &:disabled {
    color: #b2bac2;
    border-color: #b2bac2;
    cursor: not-allowed;
  }
  &:active:not(:disabled) {
    scale: 0.9;
  }
`;
