import React, { Component } from 'react';

class ToppingList extends Component {
  constructor(props) {
    super(props);
    this.getToppingClassName=this.getToppingClassName.bind(this);
    this.getSelectedTopping=this.getSelectedTopping.bind(this)
    this.getAmount=this.getAmount.bind(this);
    
  }

  getSelectedTopping() {
    const { selectedToppings, name } = this.props;
    
    const selectedTopping = selectedToppings.find(({ name: selectedToppingName }) => selectedToppingName === name);

    return selectedTopping
  }

  getToppingClassName() {
    const selectedTopping = this.getSelectedTopping();
    const active = selectedTopping && selectedTopping.amount > 0;

    if (!active) {
      return 'topping';
    }
    return 'topping topping__active'
  }

  getAmount() {
    const selectedTopping = this.getSelectedTopping();
    const amount = selectedTopping ? selectedTopping.amount : 0;
    return amount;
  }

  render() {
    const { srcImg, name, onAmountAdd, onAmountMinus, price } = this.props
    return (
      <div
        className={this.getToppingClassName()}
      >
        <img src={srcImg} alt={name}></img>
        <span>{name}</span>
        <div className="topping__amount">
          <button type="button" onClick={() => onAmountMinus(name, price)}>-</button>
          <span>{this.getAmount()}</span>
          <button type="button" onClick={() => onAmountAdd(name, price)}>+</button>
        </div>
      </div>
    )
  }
}

export default ToppingList;
