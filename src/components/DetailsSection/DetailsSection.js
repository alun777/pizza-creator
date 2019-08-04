import React from 'react';
import PropTypes from 'prop-types';
import InputDetails from '../InputDetails/index';

const DetailsSection = ({ details, handleInputChange }) => (
  <section className="section details">
    <h2 className="section__title">Enter your details</h2>
    <div className="details__container">
      {[{
        label: 'Name',
        detailName: 'name',
      }, {
        label: 'Email',
        detailName: 'email',
      }, {
        label: 'Confirm Email',
        detailName: 'confirmEmail',
      }, {
        label: 'Address',
        detailName: 'address',
      }, {
        label: 'Postcode',
        detailName: 'postcode',
      }, {
        label: 'Contact Number',
        detailName: 'contactNumber',
      }].map(({ label, detailName }) => (
        <InputDetails
          className="input"
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
);

DetailsSection.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    confirmEmail: PropTypes.string,
    address: PropTypes.string,
    postcode: PropTypes.string,
    contactNumber: PropTypes.string,
  }),
  handleInputChange: PropTypes.func.isRequired,
};

export default DetailsSection;
