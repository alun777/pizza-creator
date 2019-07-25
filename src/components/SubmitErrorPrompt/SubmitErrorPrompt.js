import React from 'react';
import error from '../../assets/error.png';


const SubmitErrorPrompt = ({ children, placeOrderError }) => {
  
  function getErrorClassName(){
    const errorClassName = placeOrderError ? "message message__error": "message message__no__error";
    return errorClassName
  }
  return (
    <div className={getErrorClassName()}>
      <img src={error} alt="error"></img>
        {children}
    </div>
  )
}

export default SubmitErrorPrompt;
