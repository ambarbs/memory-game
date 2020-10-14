import styled from 'styled-components/macro';

export const SideBarWrapper = styled.div`
  background-color: #29292e;
  height: 100%;
  width: ${(props) => (props.open ? '20%' : '2%')};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0.75;
  transition: width 500ms ease-out, opaicty 500ms ease-out;
`;

export const SideBarInnerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: opacity 400ms ease-in;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SliderButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 0.75rem;
  right: 0;
  top: ${(props) => (props.open ? '1%' : '5%')};
  transform: translateX(50%);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 2;
  transition: top 1s ease;
  &:hover {
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.86);
    background-color: black;
    color: whitesmoke;
  }
`;
