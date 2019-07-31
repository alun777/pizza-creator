import React from 'react';
import InputDetails from '../InputDetails/index';

const DetailsSection = ({ details, handleInputChange }) => {

  return (
    <section className="section details">
      <h2 className="section__title">Enter your details</h2>
      <div className="details__container">
        {[{
          label: 'Name',
          detailName: 'name'
        }, {
          label: 'Email',
          detailName: 'email'
        }, {
          label: 'Confirm Email',
          detailName: 'confirmEmail'
        }, {
          label: 'Address',
          detailName: 'address'
        }, {
          label: 'Postcode',
          detailName: 'postcode'
        }, {
          label: 'Contact Number',
          detailName: 'contactNumber'
        }].map(({ label, detailName }) => (
          <InputDetails
            className='input'
            key={detailName}
            label={label}
            detailName={detailName}
            details={details}
            handleInputChange={handleInputChange}
          />
        ))
        }
      </div>
    </section>
  )
}

export default DetailsSection;
