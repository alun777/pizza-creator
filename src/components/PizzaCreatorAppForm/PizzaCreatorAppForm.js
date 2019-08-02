import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';
import SizesSections from '../SizesSection/index';
import ToppingsSection from '../ToppingsSection/index';
import SummarySection from '../SummarySection/index';
import DetailsSection from '../DetailsSection/index';
import SubmitErrorPrompt from '../SubmitErrorPrompt/index';
import BackTop from '../BackTop/index';

export class PizzaCreatorAppForm extends Component {
  constructor(props) {
    super(props);
    this.addSelectToppingAmount = this.addSelectToppingAmount.bind(this)
    this.minusSelectedToppingAmount = this.minusSelectedToppingAmount.bind(this)
  }

  render() {
    const {
      selectedToppings,
      selectedPizza,
      listPizzaSize,
      details,
      placeOrderError,
      handleInputChange,
      handleSelectedSize,
      handleClickPlaceOrder
    } = this.props

    return (
      <section className="pizza__creator__app">
        <form action="">
          <DetailsSection
            details={details}
            handleInputChange={handleInputChange}
          />
          <SizesSections
            selectedPizza={selectedPizza}
            listPizzaSize={listPizzaSize}
            handleSelectedSize={handleSelectedSize}
          />
          <ToppingsSection
            selectedToppings={selectedToppings}
            onAmountAdd={this.addSelectToppingAmount}
            onAmountMinus={this.minusSelectedToppingAmount}
          />
          <SummarySection
            selectedToppings={selectedToppings}
            selectedPizza={selectedPizza}
            summaryTotalPrice={this.getSummaryTotal()}
            onAmountAdd={this.addSelectToppingAmount}
            onAmountMinus={this.minusSelectedToppingAmount}
            handleClickPlaceOrder={() => { handleClickPlaceOrder(selectedToppings) }}
          />
          <SubmitErrorPrompt placeOrderError={placeOrderError}>
            Please select at least one topping to place order!
          </SubmitErrorPrompt>
          <BackTop />
        </form>
      </section>
    )
  }

  updateSelectedToppingAmount(toppingName, price, delta) {
    const { selectedToppings, setSelectedTopping } = this.props;
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
      setSelectedTopping(newList);
    } else if (selectedTopping) {
      const selectedToppingIndex = selectedToppings.indexOf(selectedTopping);
      const newList = [...selectedToppings];
      newList[selectedToppingIndex].amount = newAmount
      setSelectedTopping(newList);
    }
  }

  addSelectToppingAmount(toppingName, price, value = 1) {
    this.updateSelectedToppingAmount(toppingName, price, value);
  }

  minusSelectedToppingAmount(toppingName, price, value = 1) {
    this.updateSelectedToppingAmount(toppingName, price, -value);
  }

  getSummaryTotal() {
    const { selectedPizza, selectedToppings } = this.props;
    const { sizePrice } = selectedPizza

    let totalToppingPrice = 0
    for (let i = 0; i < selectedToppings.length; i++) {
      totalToppingPrice = totalToppingPrice + selectedToppings[i].price * selectedToppings[i].amount
    }
    const summaryTotalPrice = parseFloat(sizePrice + totalToppingPrice).toFixed(2);
    return summaryTotalPrice
  }
}

export const mapStateToProps = (state) => {
  return {
    selectedToppings: state.getIn(['PizzaCreatorAppForm', 'selectedToppings']).toJS(),
    selectedPizza: state.getIn(['PizzaCreatorAppForm', 'selectedPizza']).toJS(),
    listPizzaSize: state.getIn(['PizzaCreatorAppForm', 'listPizzaSize']).toJS(),
    details: state.getIn(['PizzaCreatorAppForm', 'details']).toJS(),
    placeOrderError: state.getIn(['PizzaCreatorAppForm', 'placeOrderError'])
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedTopping(newList) {
      const action = actionCreators.setSelectedToppingAction(newList);
      dispatch(action);
    },
    handleSelectedSize(sizeName, sizePrice) {
      const action = actionCreators.handleSelectedSizeAction(sizeName, sizePrice);
      dispatch(action);
    },
    handleInputChange(event, name) {
      const action = actionCreators.handleInputChangeAction(event, name)
      dispatch(action);
    },
    handleClickPlaceOrder(selectedToppings) {
      if (selectedToppings.length === 0) {
        const action = actionCreators.onClickPlaceOrderAction()
        dispatch(action)
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaCreatorAppForm);
