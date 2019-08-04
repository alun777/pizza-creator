import React from 'react';
import PropTypes from 'prop-types';
import error from '../../assets/error.png';

const SubmitErrorPrompt = ({ children, placeOrderError }) => (
  <div className={placeOrderError ? 'message message__error' : 'message message__no__error'}>
    <img src={error} alt="error" />
    {children}
  </div>
);

SubmitErrorPrompt.propTypes = {
  children: PropTypes.string.isRequired,
  placeOrderError: PropTypes.bool.isRequired,
};

export default SubmitErrorPrompt;
