import styled from 'styled-components';

export const Input = styled.input`
  display: none;
`;

export const TogglerWrapper = styled.label`
  display: block;
  position: relative;
  width: 45px;
  height: 25px;
  cursor: pointer;
  right: 4px;
`;

export const TogglerKnob = styled.div`
  position: absolute;
  left: 3px;
  top: 3px;
  width: calc(25px - 6px);
  height: calc(25px - 6px);
  z-index: 1;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.main};
  transition: ${p => p.theme.transitions.all};
`;

export const TogglerIcon = styled.div`
  position: absolute;
  right: 3px;
  top: 3px;
  width: calc(25px - 6px);
  height: calc(25px - 6px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${p => p.theme.radii.round};
  color: ${p => p.theme.colors.text};
  transition: ${p => p.theme.transitions.all};
`;

export const TogglerSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.big};
  transition: ${p => p.theme.transitions.all};

  &::before {
    ${p => p.mode === "Dark" ? 'content: "Dark"' : 'content: "White"'};
    position: absolute;
    top: 50%;
    left: -40px;
    transform: translateY(-50%);
    font-size: 75%;
    text-transform: uppercase;
    font-weight: 500;
    transition: ${p => p.theme.transitions.opacity};
  }

  ${Input}:checked + && {
    ${TogglerKnob} {
      left: calc(100% - 19px - 3px);
    }
    ${TogglerIcon} {
      right: calc(100% - 19px - 3px);
    }
  } ;
`;
