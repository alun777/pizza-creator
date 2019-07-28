import React from 'react';
import error from '../../assets/error.png';


const SubmitErrorPrompt = ({ children, placeOrderError }) => {


  return (
    <React.Fragment>
      <div className={placeOrderError ? "message message__error" : "message message__no__error"}>
        <img src={error} alt="error"></img>
        {children}
      </div>
    </React.Fragment >
  )
}

export default SubmitErrorPrompt;
