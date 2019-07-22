import React, { Component } from 'react';

class DetailsSection extends Component {

  render() {
    return (
      <section className="section details">
        <h2 className="section__title">Enter your details</h2>
        <div className="details__container">
          <div className="detail detail__error">
            <label htmlFor="name">Name</label>
            <span className="detail__message">Please Enter Name</span>
            <input type="text" name="name" id="name"></input>
          </div>
          <div className="detail">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email"></input>
          </div>
          <div className="detail">
            <label htmlFor="confirmEmail">Confirm Email</label>
            <input type="text" name="confirmEmail" id="confirmEmail"></input>
          </div>
          <div className="detail">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address"></input>
          </div>
          <div className="detail">
            <label htmlFor="postcode">Postcode</label>
            <input type="text" name="postcode"></input>
          </div>
          <div className="detail">
            <label htmlFor="contactNumber">Contact Number</label>
            <input type="text" name="contactNumber" id="contactNumber"></input>
          </div>
        </div>
      </section>
    )
  }
}

export default DetailsSection;
