import PropTypes from 'prop-types';
import React from 'react';
import { ButtonWrapper } from './Common.Styles';

const Button = ({ onClick, label, disabled, marginTop }) => (
  <ButtonWrapper onClick={onClick} disabled={disabled} marginTop={marginTop}>
    {label}
  </ButtonWrapper>
);

Button.propTypes = {
  label: PropTypes.string,
  marginTop: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  label: '',
  marginTop: '0',
  onClick: () => {},
  disabled: false,
};

export default Button;
