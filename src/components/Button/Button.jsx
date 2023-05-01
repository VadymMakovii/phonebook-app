import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  font-family: 'Montserrat';
  gap: 6px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background: ${p => (p.isFollower ? '#5cd3a8' : '#EBD8FF')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  outline: transparent;
  border: none;
  scale: 1;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: ${p => (p.isFollower ? '#3bba8c' : '#ccb9e0')};
  }
  &:active {
    scale: 0.9;
  }

  ${p =>
    p.isLoadMore &&
    'background: #4b23a7f6; position: relative; left: 0px; top: 0px; color: #FFFFFF; &:hover:not(:disabled) {background: #693cd3f6;}; &:disabled {background: #3e305df6; cursor: not-allowed};'};
  ${p =>
    p.isHomePage &&
    'background: #EBD8FF; position: relative; left: 0px; top: 0px; color: #373737; &:hover:not(:disabled) {background: #ccb9e0;}'};
`;

export default Button;
