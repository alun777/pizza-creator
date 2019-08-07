import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ handleClickPlaceOrder }) => (
  <button
    type="submit"
    className="submit"
    onClick={(event) => { event.preventDefault(); handleClickPlaceOrder(); }}
  >
    Place order
  </button>
);

SubmitButton.propTypes = {
  handleClickPlaceOrder: PropTypes.func,
};

export default SubmitButton;
