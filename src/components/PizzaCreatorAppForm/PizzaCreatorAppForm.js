import React, { Component } from 'react';
import { connect } from 'react-redux';

import SizesSections from '../SizesSection/index';
import ToppingsSection from '../ToppingsSection/index';
import SummarySection from '../SummarySection/index';
import DetailsSection from '../DetailsSection/index';
import SubmitErrorPrompt from '../SubmitErrorPrompt/index';

import { actionCreators } from './store/index';


class PizzaCreatorAppForm extends Component {
  constructor(props) {
    super(props);
    this.addSelectToppingAmount = this.addSelectToppingAmount.bind(this)
    this.minusSelectedToppingAmount = this.minusSelectedToppingAmount.bind(this)

  }

  updateSelectedToppingAmount(toppingName, price, delta) {
    const { selectedToppings } = this.props;
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
      this.props.setSelectedTopping(newList);
    } else if (selectedTopping) {
      const selectedToppingIndex = selectedToppings.indexOf(selectedTopping);
      const newList = [...selectedToppings];
      newList[selectedToppingIndex].amount = newAmount
      this.props.setSelectedTopping(newList);
    }
  }

  addSelectToppingAmount(toppingName, price, value = 1) {
    this.updateSelectedToppingAmount(toppingName, price, value);
  }

  minusSelectedToppingAmount(toppingName, price, value = 1) {
    this.updateSelectedToppingAmount(toppingName, price, -value);
  }

  getSummaryTotal() {
    const { selectedPizzaPrice, selectedToppings } = this.props;

    let totalToppingPrice = 0
    for (let i = 0; i < selectedToppings.length; i++) {
      totalToppingPrice = totalToppingPrice + selectedToppings[i].price * selectedToppings[i].amount
    }
    const summaryTotalPrice = parseFloat(selectedPizzaPrice + totalToppingPrice).toFixed(2);
    return summaryTotalPrice
  }

  render() {
    const { selectedToppings, selectedPizzaSize, selectedPizzaPrice, listPizzaSize, details, placeOrderError } = this.props
    return (
      <section className="pizza__creator__app">
        <form action="">
          <SubmitErrorPrompt placeOrderError={placeOrderError}>
            Please select at least one topping to place order!
          </SubmitErrorPrompt>
          <DetailsSection
            details={details}
            handleInputChange={this.props.handleInputChange}
          />
          <SizesSections
            selectedPizzaSize={selectedPizzaSize}
            handleSelectedSize={this.props.handleSelectedSize}
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
            onClickPlaceOrder={()=>{this.props.onClickPlaceOrder(selectedToppings)}}
          />
        </form>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedToppings: state.getIn(['PizzaCreatorAppForm', 'selectedToppings']).toJS(),
    selectedPizzaSize: state.getIn(['PizzaCreatorAppForm', 'selectedPizzaSize']),
    selectedPizzaPrice: state.getIn(['PizzaCreatorAppForm', 'selectedPizzaPrice']),
    listPizzaSize: state.getIn(['PizzaCreatorAppForm', 'listPizzaSize']).toJS(),
    details: state.getIn(['PizzaCreatorAppForm', 'details']).toJS(),
    placeOrderError: state.getIn(['PizzaCreatorAppForm', 'placeOrderError'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedTopping(newList) {
      const action = actionCreators.setSelectedToppingAction(newList);
      dispatch(action);
    },
    handleSelectedSize(toppingName, price) {
      const action = actionCreators.handleSelectedSizeAction(toppingName, price);
      dispatch(action);
    },
    handleInputChange(event, name) {
      const action = actionCreators.handleInputChangeAction(event, name)
      dispatch(action);
    },
    onClickPlaceOrder(selectedToppings) {
      if (selectedToppings.length === 0) {
        const action = actionCreators.onClickPlaceOrderAction()
        dispatch(action)
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaCreatorAppForm);
