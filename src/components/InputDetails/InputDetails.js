import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionCreators } from './store/index';

export const InputDetails = (props) => {
  const {
    label,
    detailName,
    details,
    handleInputChange,
    handleShowError,
    detailsError,
  } = props;

  const errorClassName = (detailsError[detailName] && !details[detailName]) ? 'detail__error' : '';

  return (
    <div className={`detail ${errorClassName}`}>
      <label htmlFor={label}>{label}</label>
      {
        errorClassName
        && <span className="detail__message">{`Please Enter ${label}`}</span>
      }
      <input
        type="text"
        name={label}
        id={label}
        value={details[detailName]}
        onChange={event => handleInputChange(event, detailName)}
        onBlur={() => handleShowError(detailName)}
      />
    </div>
  );
};

export const mapStateToProps = state => ({
  detailsError: state.getIn(['InputDetails', 'detailsError']).toJS(),
});

export const mapDispatchToProps = dispatch => ({
  handleShowError(detailName) {
    const action = actionCreators.handleShowErrorAction(detailName);
    dispatch(action);
  },
});

InputDetails.propTypes = {
  label: PropTypes.string.isRequired,
  detailName: PropTypes.string.isRequired,
  details: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    confirmEmail: PropTypes.string,
    address: PropTypes.string,
    postcode: PropTypes.string,
    contactNumber: PropTypes.string,
  }),
  handleInputChange: PropTypes.func.isRequired,
  handleShowError: PropTypes.func.isRequired,
  detailsError: PropTypes.shape({
    name: PropTypes.bool,
    email: PropTypes.bool,
    confirmEmail: PropTypes.bool,
    address: PropTypes.bool,
    postcode: PropTypes.bool,
    contactNumber: PropTypes.bool,
  }),
};


export default connect(mapStateToProps, mapDispatchToProps)(InputDetails);
