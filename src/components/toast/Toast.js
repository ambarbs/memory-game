import PropTypes from 'prop-types';
import React from 'react';
import { ToastWrapper } from './Toast.Styles';

const Toast = (props) => <ToastWrapper>{props.children}</ToastWrapper>;

export default Toast;

Toast.propTypes = {
  children: PropTypes.any,
};
