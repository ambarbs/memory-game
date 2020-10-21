import styled from 'styled-components';
import { GradientAnimation } from '../common/Common.Styles';

export const GameSettingsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 90vh;
  width: 50vw;
  background: #12131d;
  background-size: 400% 400%;
  animation: ${GradientAnimation} 5s ease infinite;
`;
