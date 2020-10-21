import styled, { keyframes }  from 'styled-components/macro';

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

export const ButtonWrapper = styled.div`
  border-radius: 4px;
  background-color: #7e42f5;
  border: none;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  margin-top: ${(props) => props.marginTop};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;
  font-weight: bold;
  color: white;
  opacity: ${(props) => (props.disabled ? 0.25 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
`;

export const GradientAnimation = keyframes`
  0% {
background-position: 0 50%;
}
50% {
background-position: 100% 50%;
}
100% {
background-position: 0% 50%;
}
`;
