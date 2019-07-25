import React from 'react';

const SubmitButton = ()=> {
  return (
    <button 
      type="submit" 
      className="submit"
      onClick={(event)=>{event.preventDefault()}}
    >
        Place order
    </button>
  )
}

export default SubmitButton;
