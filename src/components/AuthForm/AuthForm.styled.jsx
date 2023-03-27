import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
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
  position: relative;
  width: calc(100% - 24px);
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  transition: ${p => p.theme.transitions.color};
  &:focus-within {
    color: ${p => p.theme.colors.textActive};
  }
`;

export const Input = styled(Field)`
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
  &:focus:not(:disabled),
  &:hover:not(:disabled) {
    background-color: ${p => p.theme.colors.primary};
    border-color: ${p => p.theme.colors.outline};
  };
  &:disabled {
    cursor: not-allowed;
  }
`;

export const StyledLink = styled(Link)`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.text};
  transition: ${p => p.theme.transitions.color};
  &:focus,
  &:hover {
    color: ${p => p.theme.colors.textActive};
    text-decoration: none;
  }
`;

export const ShowPasswordBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 0px;
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  transform: translateY(10%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;
  border: ${p => p.theme.borders.none};
  color: #b2bac2;
  transition: ${p => p.theme.transitions.all};
`;
