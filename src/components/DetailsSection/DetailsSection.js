import React, { Component } from 'react';
import InputDetails from '../InputDetails/index';

class DetailsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const { details, handleInputChange } =this.props;

    return (
      <section className="section details">
        <h2 className="section__title">Enter your details</h2>
        <div className="details__container">
          {[{
            label: 'Name',
            name: 'name'
          }, {
            label: 'Email',
            name: 'email'
          }, {
            label: 'Confirm Email',
            name: 'confirmEmail'
          }, {
            label: 'Address',
            name: 'address'
          }, {
            label: 'Postcode',
            name: 'postcode'
          }, {
            label: 'Contact Number',
            name: 'contactNumber'
          }].map(({ label, name }) => (
            <InputDetails
              key={name} 
              label={label}
              name={name}
              details={details}
              handleInputChange={handleInputChange}
            />
          ))
          }
        </div>
      </section>
    )
  }
}

export default DetailsSection;
