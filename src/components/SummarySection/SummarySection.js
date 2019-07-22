import React, { Component } from 'react';
import SubmitButton from '../SubmitButton';

class SummarySection extends Component {

  render(){
    return (
    <section className="section summary">
      <h2 className="section__title">Summary</h2>
      <ul className="items">
        <li className="item">
          <span className="item__name">Pizza (Small)</span>
          <span className="item__price">$9.99</span>
        </li>
        <li className="item">
          <span className="item__name">Olive</span>
          <span className="item__price">$0.99</span>
        </li>
        <li className="item">
          <span className="item__name">Peppers</span>
          <span className="item__price">$0.99</span>
        </li>
        <li className="item">
          <span className="item__name">Pepperoni</span>
          <span className="item__price">$0.99</span>
        </li>
      </ul>
      <hr/>
      <p className="summary__total">
        <span>Total:</span>
        <span>$ 12.96</span>
      </p>
      <p>
        <SubmitButton />
      </p>
    </section>
    )
  }
}

export default SummarySection;
