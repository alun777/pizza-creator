import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ onClickPlaceOrder }) => (
  <button
    type="submit"
    className="submit"
    onClick={(event) => { event.preventDefault(); onClickPlaceOrder(); }}
  >
    Place order
  </button>
);

SubmitButton.propTypes = {
  onClickPlaceOrder: PropTypes.func.isRequired,
};

export default SubmitButton;
