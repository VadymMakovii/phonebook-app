import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
  margin: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Description = styled.h2`
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const StyledLink = styled(Link)`
  position: relative;
  margin: 0px;
  text-decoration: none;
  width: 196px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  gap: 6px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  outline: transparent;
  border: none;
  scale: 1;
  cursor: pointer;
  &:hover:not(:disabled) {
    background: #ccb9e0;
  }
  &:active {
    scale: 0.9;
  }
`;
