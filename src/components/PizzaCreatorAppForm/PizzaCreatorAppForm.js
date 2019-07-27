import React, { Component } from 'react';
import store from '../../store/index'

import SizesSections from '../SizesSection/index';
import ToppingsSection from '../ToppingsSection/index';
import SummarySection from '../SummarySection/index';
import DetailsSection from '../DetailsSection/index';
import SubmitErrorPrompt from '../SubmitErrorPrompt/index';

import { 
  setSelectedToppingAction,
  handleSelectedSizeAction,
  handleInputChangeAction,
  onClickPlaceOrderAction
 } from '../../store/actionCreators'


class PizzaCreatorAppForm extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    this.addSelectToppingAmount = this.addSelectToppingAmount.bind(this)
    this.minusSelectedToppingAmount = this.minusSelectedToppingAmount.bind(this)
    this.handleSelectedSize = this.handleSelectedSize.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.onClickPlaceOrder = this.onClickPlaceOrder.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)

    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  setSelectedTopping(newList) {
    const action = setSelectedToppingAction(newList);
    store.dispatch(action);
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
    const action = handleSelectedSizeAction(toppingName, price);
    store.dispatch(action);
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
    const action = handleInputChangeAction(event, name)
    store.dispatch(action)

    const newDetails = { ...this.state.details, [name]: event.target.value }
    this.setState({
      details: newDetails
    })
  }

  onClickPlaceOrder() {
    if (this.state.selectedToppings.length === 0) {
      const action = onClickPlaceOrderAction()
      store.dispatch(action)
    }
  }

    // if (this.state.selectedToppings.length === 0) {
    //   this.setState({
    //     placeOrderError: true
    //   });
    //   setTimeout(() => {
    //     this.setState({
    //       placeOrderError: false
    //     })
    //   }, 3000)
    // }
  

  render() {
    const { selectedToppings, selectedPizzaSize, selectedPizzaPrice, listPizzaSize, details, placeOrderError } = this.state
    return (
      <section className="pizza__creator__app">
        <form action="">
          <SubmitErrorPrompt placeOrderError={placeOrderError}>
            Please select at least one topping to place order!
          </SubmitErrorPrompt>
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
            onClickPlaceOrder={this.onClickPlaceOrder}
          />
        </form>
      </section>
    )
  }
}

export default PizzaCreatorAppForm;
