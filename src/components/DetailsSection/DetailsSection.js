import React, { Component } from 'react';

class DetailsSection extends Component {

  render() {
    return (
      <section className="section details">
        <h2 className="section__title">Enter your details</h2>
        <div className="details__container">
          {[{
            name: "Name"
          }, {
            name: "Email"
          }, {
            name: "Confirm Email"
          }, {
            name: "Address"
          }, {
            name: "Postcode"
          }, {
            name: "Contact Number"
          }].map(({ name }) => (
            <div className="detail" key={name}>
              <label htmlFor={name}>{name}</label>
              {/* <span className="detail__message">Please Enter Name</span> */}
              <input type="text" name={name} id={name}></input>
            </div>
          ))
          }
        </div>
      </section>
    )
  }
}

export default DetailsSection;
