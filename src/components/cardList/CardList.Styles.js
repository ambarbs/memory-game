import styled from 'styled-components/macro';
import { GradientAnimation } from '../common/Common.Styles';

export const ImageCardWrapper = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

export const CardBackSide = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #ee2943, #e5e71a, #17d57f, #3514d5, #3514a5);
  background-size: 400% 400%;
  animation: ${GradientAnimation} 4s ease infinite;
`;
