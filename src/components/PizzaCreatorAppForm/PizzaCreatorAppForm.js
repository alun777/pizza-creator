import React, { Component } from 'react';

import SizesSections from '../SizesSection/index';
import ToppingsSection from '../ToppingsSection/index';
import SummarySection from '../SummarySection/index';
import DetailsSection from '../DetailsSection/index';

class PizzaCreatorAppForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPizzaSize: [{
        name: 'Small',
        price: 9.99
      }, {
        name: 'Medium',
        price: 10.99
      }, {
        name: 'Large',
        price: 11.99
      }],
      selectedToppings: [],
      selectedPizzaSize: '',
      selectedPizzaPrice: '',
      details: {
        name: '',
        email: '',
        confirmEmail: '',
        address: '',
        postcode: '',
        contactNumber: ''
      }

    }
    this.addSelectToppingAmount = this.addSelectToppingAmount.bind(this)
    this.minusSelectedToppingAmount = this.minusSelectedToppingAmount.bind(this)
    this.handleSelectedSize = this.handleSelectedSize.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
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

  addSelectToppingAmount(toppingName, price, value = 1) {
    this.updateSelectedToppingAmount(toppingName, price, value);
  }

  minusSelectedToppingAmount(toppingName, price, value = 1) {
    this.updateSelectedToppingAmount(toppingName, price, -value);
  }

  handleSelectedSize(toppingName, price) {
    this.setState({
      selectedPizzaSize: toppingName,
      selectedPizzaPrice: price
    })
  }

  getSummaryTotal() {
    const { selectedPizzaPrice, selectedToppings } = this.state;

    let totalToppingPrice = 0
    for (let i = 0; i < selectedToppings.length; i++) {
      totalToppingPrice = totalToppingPrice + selectedToppings[i].price * selectedToppings[i].amount
    }

    const summaryTotalPrice = parseFloat(selectedPizzaPrice + totalToppingPrice).toFixed(2);

    return summaryTotalPrice
  }

  handleInputChange(event, name) {
    const newDetails = {...this.state.details, [name]:event.target.value}
    this.setState({
      details: newDetails
    })

  }

  render() {
    const { selectedToppings, selectedPizzaSize, selectedPizzaPrice, listPizzaSize, details } = this.state
    return (
      <section className="pizza__creator__app">
        <form action="">
          <DetailsSection 
            details={details}
            handleInputChange={this.handleInputChange}
          />
          <SizesSections
            selectedPizzaSize={selectedPizzaSize}
            handleSelectedSize={this.handleSelectedSize}
            listPizzaSize={listPizzaSize}
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
            summaryTotalPrice={this.getSummaryTotal()}
            onAmountAdd={this.addSelectToppingAmount}
            onAmountMinus={this.minusSelectedToppingAmount}
          />
        </form>
      </section>
    )
  }
}

export default PizzaCreatorAppForm;
