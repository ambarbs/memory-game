import styled from 'styled-components/macro';

export const FLipCardWrapper = styled.div`
  cursor: pointer;
  height: 200px;
  //perspective: 600;
  position: relative;
  width: 200px;
`;

export const FLipCardContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  transition: all 1s ease-in-out;
  transform: ${(props) => props.rotate && 'rotateY(180deg)'};
`;

export const FlipCardFront = styled.div`
  backface-visibility: hidden;
  //border: 2px solid dimgrey;
  border-radius: 6px;
  height: 100%;
  position: absolute;
  overflow: hidden;
  width: 100%;
`;

export const FlipCardBack = styled(FlipCardFront)`
  background: #eaeaed;
  color: #0087cc;
  line-height: 150px;
  text-align: center;
  transform: rotateY(180deg);
  //border: 2px solid dimgrey;
  border-radius: 6px;
`;
