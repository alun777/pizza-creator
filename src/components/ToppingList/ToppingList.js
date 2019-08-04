import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToppingList extends Component {
  constructor(props) {
    super(props);
    this.getToppingClassName = this.getToppingClassName.bind(this);
    this.getSelectedTopping = this.getSelectedTopping.bind(this);
    this.getAmount = this.getAmount.bind(this);
  }

  getSelectedTopping() {
    const { selectedToppings, toppingName } = this.props;
    const selectedTopping = selectedToppings.find(({ name }) => name === toppingName);
    return selectedTopping;
  }

  getToppingClassName() {
    const selectedTopping = this.getSelectedTopping();
    const toppingActive = selectedTopping && selectedTopping.amount > 0;
    if (!toppingActive) {
      return 'topping';
    }
    return 'topping topping__active';
  }

  getAmount() {
    const selectedTopping = this.getSelectedTopping();
    const toppingAmount = selectedTopping ? selectedTopping.amount : 0;
    return toppingAmount;
  }

  render() {
    const {
      srcImg, toppingName, onAmountAdd, onAmountMinus, toppingPrice,
    } = this.props;
    return (
      <div
        className={this.getToppingClassName()}
      >
        <img src={srcImg} alt={toppingName} />
        <span>{toppingName}</span>
        <div className="topping__amount">
          <button type="button" onClick={() => onAmountMinus(toppingName, toppingPrice)}>-</button>
          <span>{this.getAmount()}</span>
          <button type="button" onClick={() => onAmountAdd(toppingName, toppingPrice)}>+</button>
        </div>
      </div>
    );
  }
}

ToppingList.propTypes = {
  srcImg: PropTypes.string.isRequired,
  toppingName: PropTypes.string.isRequired,
  onAmountAdd: PropTypes.func.isRequired,
  onAmountMinus: PropTypes.func.isRequired,
  toppingPrice: PropTypes.number.isRequired,
  selectedToppings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ToppingList;
