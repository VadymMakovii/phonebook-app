import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
