import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';

const InputDetails = (props)=> {

  const { label, name, details, handleInputChange, handleShowError } = props;
  const { detailsError } = props;
  const errorClassName = (detailsError[name] && !details[name]) ?  'detail__error': '';

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
      value={details[name]}
      onChange={(event) => handleInputChange(event, name)}
      onBlur={()=>handleShowError(name)}
    />
  </div>
  )
}

const mapStateToProps =(state)=>{
  return{
    detailsError: state.InputDetails.detailsError,
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    handleShowError(name){
      const action = actionCreators.handleShowErrorAction(name)
      dispatch(action)
    },
  }
}

InputDetails.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  details: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(InputDetails);
