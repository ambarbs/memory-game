import PropTypes from 'prop-types';
import React from 'react';
import {
  SelectButtonGroupWrapper,
  SelectButtonGroupWrapperGrid,
  SelectButtonWrapper,
  SelectButtonWrapperForImage,
  SideBarContentTitle,
} from './SelectButtonGroup.styles';

const wrapperMapSelectButton = {
  text: SelectButtonWrapper,
  icon: SelectButtonWrapperForImage,
};
const wrapperMapSelectButtonGroup = {
  grid: SelectButtonGroupWrapperGrid,
  flex: SelectButtonGroupWrapper,
};
const SelectButtonGroup = ({
  contents,
  onSelect,
  selectedIndex,
  title,
  wrapperType,
  rows,
  cols,
  height,
  width,
  type,
}) => {
  const WrapperComponentButtonGroup = wrapperMapSelectButtonGroup[wrapperType];
  const WrapperComponentSelectButton = wrapperMapSelectButton[type];
  return (
    <>
      <SideBarContentTitle>{title}</SideBarContentTitle>
      <WrapperComponentButtonGroup rows={rows} cols={cols}>
        {contents.map((label, index) => (
          <WrapperComponentSelectButton
            key={label}
            onClick={() => onSelect(index)}
            active={selectedIndex === index}
            height={height}
            width={width}
          >
            {label}
          </WrapperComponentSelectButton>
        ))}
      </WrapperComponentButtonGroup>
    </>
  );
};

export default SelectButtonGroup;

SelectButtonGroup.propTypes = {
  contents: PropTypes.array,
  onSelect: PropTypes.func,
  selectedIndex: PropTypes.number,
  rows: PropTypes.number,
  cols: PropTypes.number,
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  wrapperType: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
