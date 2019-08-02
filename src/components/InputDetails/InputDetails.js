import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';

export const InputDetails = (props) => {

  const {
    label,
    detailName,
    details,
    handleInputChange,
    handleShowError,
    detailsError
  } = props;
  
  const errorClassName = (detailsError[detailName] && !details[detailName]) ? 'detail__error' : '';

  return (
    <div className={`detail ${errorClassName}`}>
      <label htmlFor={label}>{label}</label>
      {
        errorClassName &&
        <span className="detail__message">{`Please Enter ${label}`}</span>
      }
      <input
        type="text"
        name={label}
        id={label}
        value={details[detailName]}
        onChange={(event) => handleInputChange(event, detailName)}
        onBlur={() => handleShowError(detailName)}
      />
    </div>
  )
}

export const mapStateToProps = (state) => {
  return {
    detailsError: state.getIn(['InputDetails', 'detailsError']).toJS()
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    handleShowError(detailName) {
      const action = actionCreators.handleShowErrorAction(detailName)
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputDetails);
