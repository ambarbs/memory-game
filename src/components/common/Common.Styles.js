import styled from 'styled-components/macro';

export const Grid = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: ${(props) => `repeat(${props.col}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.row}, 1fr)`};
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
`;

export const Button = styled.div`
  border-radius: 4px;
  background-color: #d35400;
  border: none;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: large;
  font-weight: bold;
  color: white;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
`;
