import PropTypes from 'prop-types';
import React from 'react';

const Slider = ({ min, max, onChange }) => {
  return (
    <div>
      <input type="range" min={min} max={max} onChange={(event) => onChange(event)} />
    </div>
  );
};

Slider.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
};

Slider.defaultProps = {
  max: 0,
  min: 1,
};

export default Slider;
