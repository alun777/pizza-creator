import React from 'react';

const SubmitButton = ({ onClickPlaceOrder })=> {
  return (
    <button 
      type="submit" 
      className="submit"
      onClick={(event)=>{event.preventDefault(); onClickPlaceOrder()}}
    >
        Place order
    </button>
  )
}

export default SubmitButton;
