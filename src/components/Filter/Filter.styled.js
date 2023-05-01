import styled from 'styled-components';

export const Wrapper = styled.li`
  margin: 0px;
  padding: 0px;
  list-style: none;
`;

export const Dropdown = styled.button`
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  gap: 6px;
  padding: 5px 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
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

export const CurrentValue = styled.p`
  font-family: 'Montserrat';
  gap: 6px;
  padding: 10px;
  border-radius: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #ebd8ff70;
`;

export const List = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  gap: 8px;
  list-style: none;
  margin-left: 50px;
`;

export const Item = styled.li``;

export const Option = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  font-family: 'Montserrat';
  gap: 6px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
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
