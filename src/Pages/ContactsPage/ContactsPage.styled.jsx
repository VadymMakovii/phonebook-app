import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: calc(100vh - 220px);
  gap: ${p => p.theme.space[3]}px;
`;

export const SectionTitle = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  position: sticky;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  color: ${p => p.theme.colors.mainText};
  background-color: ${p => p.theme.colors.main};
  border-radius: ${p => p.theme.radii.large};
  box-shadow: ${p => p.theme.shadows.main};
`;
