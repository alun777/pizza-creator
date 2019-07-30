import React, { Component } from 'react';

class ToppingList extends Component {
  constructor(props) {
    super(props);
    this.getToppingClassName=this.getToppingClassName.bind(this);
    this.getSelectedTopping=this.getSelectedTopping.bind(this)
    this.getAmount=this.getAmount.bind(this);
  }

  getSelectedTopping() {
    const { selectedToppings, toppingName } = this.props;
    const selectedTopping = selectedToppings.find(({ name }) => name === toppingName);
    return selectedTopping
  }

  getToppingClassName() {
    const selectedTopping = this.getSelectedTopping();
    const toppingActive = selectedTopping && selectedTopping.amount > 0;
    if (!toppingActive) {
      return 'topping';
    }
    return 'topping topping__active'
  }

  getAmount() {
    const selectedTopping = this.getSelectedTopping();
    const toppingAmount = selectedTopping ? selectedTopping.amount : 0;
    return toppingAmount;
  }

  render() {
    const { srcImg, toppingName, onAmountAdd, onAmountMinus, toppingPrice } = this.props
    return (
      <div
        className={this.getToppingClassName()}
      >
        <img src={srcImg} alt={toppingName}></img>
        <span>{toppingName}</span>
        <div className="topping__amount">
          <button type="button" onClick={() => onAmountMinus(toppingName, toppingPrice)}>-</button>
          <span>{this.getAmount()}</span>
          <button type="button" onClick={() => onAmountAdd(toppingName, toppingPrice)}>+</button>
        </div>
      </div>
    )
  }
}

export default ToppingList;
