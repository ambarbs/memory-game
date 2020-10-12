import styled from 'styled-components';

export const SelectButtonWrapper = styled.div`
  transition: 0.4s;
  background: ${(props) => (props.active ? '#007aff' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#007aff')};
  border-radius: 6px;
  border: ${(props) => (props.active ? '1px solid #fff' : '1px solid #007aff')};
  height: ${(props) => props.height || '2rem'};
  width: ${(props) => props.width || '2rem'};
  font: 14px/36px 'Roboto', sans-serif !important;
  padding: 0 12px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transition: 0.4s;
    background: ${(props) => (props.active ? '#007aff' : '#fff')};
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.56);
    border: 1px solid #007aff;
  }
`;

export const SelectButtonWrapperForImage = styled.div`
  transition: 0.4s;
  border-radius: 6px;
  border: ${(props) => (props.active ? '1px solid #fff' : '1px solid #007aff')};
  height: 3.5rem;
  width: 6rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transition: 0.4s;
    background: ${(props) => (props.active ? '#007aff' : '#fff')};
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.56);
    border: 1px solid #007aff;
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
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.rows}, 1fr)`};
`;

export const SideBarContentTitle = styled.h3`
  color: white;
`;
