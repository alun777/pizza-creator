import React, { Component } from 'react';
import PropTypes from 'prop-types';


class InputDetails extends Component{
  constructor(props){
    super(props);
    this.state={
      showError: false
    };

    this.handleShowError = this.handleShowError.bind(this);
  }

  handleShowError(){
    this.setState({
      showError: true
    });
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
