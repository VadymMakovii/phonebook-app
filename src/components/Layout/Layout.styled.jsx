import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  grid-template-rows: auto 1fr auto;
  width: 900px;
  min-height: 100vh;
  overflow: hidden;
  box-shadow: ${p => p.theme.shadows.main};
`;

export const Main = styled.main`
  display: flex;
  align-items: flex-start;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 32px;
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.main};
  box-shadow: ${p => p.theme.shadows.main};
`;
