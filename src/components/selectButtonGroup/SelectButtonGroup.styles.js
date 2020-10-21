import styled from 'styled-components';

export const SelectButtonWrapper = styled.div`
  transition: 0.4s;
  background: ${(props) => (props.active ? '#7e42f5' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#7e42f5')};
  border-radius: 6px;
  border: ${(props) => (props.active ? '1px solid #fff' : '1px solid #7e42f5')};
  height: ${(props) => props.height || '2rem'};
  width: ${(props) => props.width || '2rem'};
  font: 14px/36px 'Roboto', sans-serif;
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: bold;
  padding: 0 12px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transition: 0.4s;
    background: ${(props) => (props.active ? '#7e42f5' : '#fff')};
    box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.56);
    border: 1px solid ${(props) => (props.active ? '#7e42f5' : '#fff')};
  }
`;

export const SelectButtonWrapperForImage = styled.div`
  transition: 0.4s;
  border-radius: 6px;
  border: ${(props) => (props.active ? '1px solid #fff' : '2px solid #7e42f5')};
  height: ${(props) => props.height || '3.5rem'};
  width: ${(props) => props.width || '6rem'};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transition: 0.4s;
    background: ${(props) => (props.active ? '#7e42f5' : '#fff')};
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.56);
    border: 1px solid ${(props) => (props.active ? '#7e42f5' : '#fff')};
  }
`;

export const SelectButtonGroupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-bottom: 2rem;
`;

export const SelectButtonGroupWrapperGrid = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
  > * {
    margin-bottom: 5vh;
  }
`;

export const SideBarContentTitle = styled.h3`
  color: white;
`;
