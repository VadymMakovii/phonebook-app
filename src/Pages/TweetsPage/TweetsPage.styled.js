import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  position: sticky;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const GoBack = styled(Link)`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  margin: 0px;
  text-decoration: none;
  font-family: 'Montserrat';
  gap: 6px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  color: #ebd8ff;
  scale: 1;
  cursor: pointer;
  &:hover:not(:disabled) {
    color: #5cd3a8;
  }
  &:active {
    scale: 0.9;
  }
`;
