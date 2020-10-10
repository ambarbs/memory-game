import PropTypes from 'prop-types';
import React from 'react';
import {
  SelectButtonGroupWrapper,
  SelectButtonGroupWrapperGrid,
  SelectButtonWrapper,
} from './SelectButtonGroup.styles';

const wrapperMap = {
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
}) => {
  const WrapperComponent = wrapperMap[wrapperType];
  return (
    <>
      <h3>{title}</h3>
      <WrapperComponent rows={rows} cols={cols}>
        {contents.map((label, index) => (
          <SelectButtonWrapper
            key={label}
            onClick={() => onSelect(index)}
            active={selectedIndex === index}
            height={height}
            width={width}
          >
            {label}
          </SelectButtonWrapper>
        ))}
      </WrapperComponent>
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
};
