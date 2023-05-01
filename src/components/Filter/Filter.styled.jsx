import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 32px);
  display: flex;
  min-height: 50px;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.main};
  transition: ${p => p.theme.transitions.common};
`;

export const Label = styled.label`
  width: calc(100% - 24px);
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  transition: ${p => p.theme.transitions.color};
  &:focus-within {
    color: ${p => p.theme.colors.textActive};
  }
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.textActive};
  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal};
  border-color: transparent;
  outline: transparent;
  transition: ${p => p.theme.transitions.all};
  &:focus,
  &:hover {
    background-color: ${p => p.theme.colors.primary};
    border-color: ${p => p.theme.colors.outline};
  }
`;
