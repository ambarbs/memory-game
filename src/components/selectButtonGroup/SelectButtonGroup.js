import PropTypes from 'prop-types';
import React from 'react';
import { SelectButtonGroupWrapper, SelectButtonWrapper } from './SelectButtonGroup.styles';

const SelectButtonGroup = ({ labels, onSelect, selectedIndex }) => {
  return (
    <SelectButtonGroupWrapper>
      {labels.map((label, index) => (
        <SelectButtonWrapper
          key={label}
          onClick={() => onSelect(index)}
          active={selectedIndex === index}
        >
          {label}
        </SelectButtonWrapper>
      ))}
    </SelectButtonGroupWrapper>
  );
};

export default SelectButtonGroup;

SelectButtonGroup.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func,
  selectedIndex: PropTypes.number,
};
