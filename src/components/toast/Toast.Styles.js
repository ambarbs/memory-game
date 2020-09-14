import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const FadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;

export const ToastWrapper = styled.div`
  width: 200px;
  height: auto;
  position: absolute;
  left: 50%;
  margin-left: -100px;
  bottom: 10px;
  background-color: #35bc7a;
  color: #f0f0f0;
  font-size: 20px;
  padding: 10px;
  text-align: center;
  border-radius: 7px;
  -webkit-box-shadow: 0px 0px 24px -1px rgba(56, 56, 56, 1);
  -moz-box-shadow: 0px 0px 24px -1px rgba(56, 56, 56, 1);
  box-shadow: 0px 0px 24px -1px rgba(56, 56, 56, 1);
  animation: ${FadeIn} forwards 1000ms;
  animation: ${FadeOut} forwards 30000ms;
`;
