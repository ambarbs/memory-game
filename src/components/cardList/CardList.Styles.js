import styled, { keyframes } from 'styled-components/macro';

export const ImageCardWrapper = styled.img`
  width: 100%;
  height: 100%;
`;

const GradientAnimation = keyframes`
  0% {
background-position: 0% 50%;
}
50% {
background-position: 100% 50%;
}
100% {
background-position: 0% 50%;
}
`;
export const CardBackSide = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #ee2943, #e7da65, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${GradientAnimation} 5s ease infinite;
`;
