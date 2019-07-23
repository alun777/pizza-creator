import React, { Component } from 'react';
import SubmitButton from '../SubmitButton';

class SummarySection extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const { selectedToppings, selectedPizza, total } = this.props
    return (
      <section className="section summary">
        <h2 className="section__title">Summary</h2>
        <ul className="items">
          <li className="item">
            <span className="item__name">Pizza ({selectedPizza.name})</span>
            <span className="item__price">${selectedPizza.price}</span>
          </li>
          {
            selectedToppings.map(({ name, price, amount }) => {
              return (
                <li className="item">
                  <span className="item__name">{name} * {amount}</span>
                  <span className="item__price">${price}</span>
                </li>
              )
            })
          }
        </ul>
        <hr />
        <p className="summary__total">
          <span>Total:</span>
          <span>
            ${total}
          </span>
        </p>
        <p>
          <SubmitButton />
        </p>
      </section>
    )
  }
}

export default SummarySection;
