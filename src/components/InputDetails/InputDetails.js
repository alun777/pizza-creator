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

    // this.state={
    //   showError: false
    // };

    this.handleShowError = this.handleShowError.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);

    store.subscribe(this.handleStoreChange);

  }

  handleStoreChange (){
    console.log(this.state.showError)

    this.setState = (store.getState())
    console.log(this.state.showError)
  }

  handleShowError(){
    const action = handleShowErrorAction()
    store.dispatch(action)
    // this.setState({
    //   showError: true
    // });
  }

  render(){
    const { label, name, details, handleInputChange } = this.props;
    const { showError } = this.state;
    const errorClassName = (showError && !details[name]) ?  'detail__error': '';

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
        onBlur={this.handleShowError}
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
