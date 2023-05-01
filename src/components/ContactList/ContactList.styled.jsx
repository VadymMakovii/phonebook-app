import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-direction: column;
width: 100%;
gap: ${p => p.theme.space[3]}px;
margin: ${p => p.theme.space[0]}px;
padding: ${p => p.theme.space[0]}px;
overflow-y: auto;
`; 