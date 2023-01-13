import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: Roboto, sans-serif;
    transition: ${({ theme }) => theme.transitions.common};
  }

::-webkit-scrollbar {
  width: 0.7vw;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radii.normal};
};

::-webkit-scrollbar-thumb {
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.normal};
  border: ${p => p.theme.borders.normal};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${p => p.theme.colors.outline};
  };
};
`;
