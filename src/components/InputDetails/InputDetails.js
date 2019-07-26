import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../../store/index'
import { 
  handleShowErrorAction
 } from '../../store/actionCreators'


class InputDetails extends Component{
  constructor(props){
    super(props);
    this.state = store.getState();

 

    this.handleShowError = this.handleShowError.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);

  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleShowError(name){
    const action = handleShowErrorAction(name)
    store.dispatch(action)
  }

  render(){
    const { label, name, details, handleInputChange } = this.props;
    const { detailsError } = this.state;
    const errorClassName = (detailsError[name] && !details[name]) ?  'detail__error': '';

    return(
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
        onFocus={()=>this.handleShowError(name)}
      />
    </div>
    )
  }
}

InputDetails.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  details: PropTypes.object,
}

export default InputDetails;
