import styled from 'styled-components/macro';

export const FLipCardWrapper = styled.div`
  cursor: pointer;
  position: relative;
  height: 25vh;
  width: 25vh;
  @media only screen and (max-width: 600px) {
    height: 12vh;
    width: 12vh;
  }
`;

export const FLipCardContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  transition: all 1s ease-in-out;
  transform: ${(props) => props.flip && 'rotateY(180deg)'};
`;

export const FlipCardBack = styled.div`
  backface-visibility: hidden;
  border-radius: 6px;
  height: 100%;
  position: absolute;
  overflow: hidden;
  width: 100%;
`;

export const FlipCardFront = styled(FlipCardBack)`
  background: #eaeaed;
  color: #0087cc;
  text-align: center;
  transform: rotateY(180deg);
  border-radius: 6px;
`;
