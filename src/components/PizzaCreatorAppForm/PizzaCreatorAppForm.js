import React, { Component } from 'react';

import SizesSections from '../SizesSection/index';
import ToppingsSection from '../ToppingsSection/index';
import SummarySection from '../SummarySection/index';
import DetailsSection from '../DetailsSection/index';

class PizzaCreatorAppForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedToppings: [],
      selectedPizzaSize: '',
      selectedPizzaPrice: ''
    }
    this.addSelectToppingAmount = this.addSelectToppingAmount.bind(this)
    this.minusSelectedToppingAmount = this.minusSelectedToppingAmount.bind(this)
    this.handleSelectedSize = this.handleSelectedSize.bind(this)
  }

  setSelectedTopping(newList) {
    this.setState({
      selectedToppings: newList
    })
  }

  updateSelectedToppingAmount(toppingName, price, delta) {
    const { selectedToppings } = this.state;
    const selectedTopping = selectedToppings.find(({ name }) => {
      return name === toppingName;
    })

    const amount = selectedTopping ? selectedTopping.amount : 0;
    const newAmount = (amount + delta >= 0) ? amount + delta : 0;

    if (selectedTopping === undefined && newAmount > 0) {
      const newList = [...selectedToppings, {
        name: toppingName,
        amount: newAmount,
        price
      }];
      this.setSelectedTopping(newList);
    } else if (selectedTopping) {
      const selectedToppingIndex = selectedToppings.indexOf(selectedTopping);
      const newList = [...selectedToppings];
      newList[selectedToppingIndex].amount = newAmount
      this.setSelectedTopping(newList);
    }
  }

  addSelectToppingAmount(name, price, value = 1) {
    this.updateSelectedToppingAmount(name, price, value)
  }

  minusSelectedToppingAmount(name, price, value = 1) {
    this.updateSelectedToppingAmount(name, price, -value)
  }

  handleSelectedSize(name, price) {
    this.setState({
      selectedPizzaSize: name,
      selectedPizzaPrice: price
    })
  }

  getSummaryTotal() {
    const { selectedPizzaPrice, selectedToppings } = this.state;

    let totalToppingPrice = 0
    for (let i = 0; i < selectedToppings.length; i++) {
      totalToppingPrice = totalToppingPrice + selectedToppings[i].price * selectedToppings[i].amount
    }

    const total = parseFloat(selectedPizzaPrice + totalToppingPrice).toFixed(2);

    return total
  }

  render() {
    const { selectedToppings, selectedPizzaSize, selectedPizzaPrice } = this.state
    return (
      <section className="pizza__creator__app">
        <form action="">
          <DetailsSection />
          <SizesSections
            selectedPizzaSize={selectedPizzaSize}
            handleSelectedSize={this.handleSelectedSize}
          />
          <ToppingsSection
            selectedToppings={selectedToppings}
            onAmountAdd={this.addSelectToppingAmount}
            onAmountMinus={this.minusSelectedToppingAmount}
          />
          <SummarySection
            selectedToppings={selectedToppings}
            selectedPizzaSize={selectedPizzaSize}
            selectedPizzaPrice={selectedPizzaPrice}
            total={this.getSummaryTotal()}
          />
        </form>
      </section>
    )
  }
}

export default PizzaCreatorAppForm;
