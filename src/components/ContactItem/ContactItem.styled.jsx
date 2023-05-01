import styled from 'styled-components';

export const Item = styled.li`
${props => props.deleted ? `transform: translateX(50%);
opacity: 0;` : `transform: translateX(0%);
opacity: 1;`};
transition: ${p => p.theme.transitions.all};
display: flex;
justify-content: space-between;
align-items: space-between;
gap: ${p => p.theme.space[4]}px;
border-bottom: ${p => p.theme.borders.normal};
padding-right: ${p => p.theme.space[1]}px;
`;

export const ContactBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  margin: ${p => p.theme.space[0]}px;
  text-transform: capitalize;
`;

export const Number = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.regular};
  margin: ${p => p.theme.space[0]}px;
  text-transform: capitalize;
`;
export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
`;
