import styled from 'styled-components/macro';

export const Grid = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;
