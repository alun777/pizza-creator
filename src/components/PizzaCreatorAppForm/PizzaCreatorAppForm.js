import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    this.addSelectToppingAmount = this.addSelectToppingAmount.bind(this);
    this.minusSelectedToppingAmount = this.minusSelectedToppingAmount.bind(this);
  }


  getSummaryTotal() {
    const { selectedPizza, selectedToppings } = this.props;
    const { sizePrice } = selectedPizza;

    let totalToppingPrice = 0;
    for (let i = 0; i < selectedToppings.length; i += 1) {
      totalToppingPrice += selectedToppings[i].price * selectedToppings[i].amount;
    }
    const summaryTotalPrice = parseFloat(sizePrice + totalToppingPrice).toFixed(2);
    return summaryTotalPrice;
  }

  updateSelectedToppingAmount(toppingName, price, delta) {
    const { selectedToppings, setSelectedTopping } = this.props;
    const selectedTopping = selectedToppings.find(({ name }) => name === toppingName);
    const amount = selectedTopping ? selectedTopping.amount : 0;
    const newAmount = (amount + delta >= 0) ? amount + delta : 0;

    if (selectedTopping === undefined && newAmount > 0) {
      const newList = [...selectedToppings, {
        name: toppingName,
        amount: newAmount,
        price,
      }];
      setSelectedTopping(newList);
    } else if (selectedTopping) {
      const selectedToppingIndex = selectedToppings.indexOf(selectedTopping);
      const newList = [...selectedToppings];
      newList[selectedToppingIndex].amount = newAmount;
      setSelectedTopping(newList);
    }
  }

  addSelectToppingAmount(toppingName, price, value = 1) {
    this.updateSelectedToppingAmount(toppingName, price, value);
  }

  minusSelectedToppingAmount(toppingName, price, value = 1) {
    this.updateSelectedToppingAmount(toppingName, price, -value);
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
      handleClickPlaceOrder,
    } = this.props;

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
            handleClickPlaceOrder={() => { handleClickPlaceOrder(selectedToppings); }}
          />
          <SubmitErrorPrompt placeOrderError={placeOrderError}>
            Please select at least one topping to place order!
          </SubmitErrorPrompt>
          <BackTop />
        </form>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  selectedToppings: state.getIn(['PizzaCreatorAppForm', 'selectedToppings']).toJS(),
  selectedPizza: state.getIn(['PizzaCreatorAppForm', 'selectedPizza']).toJS(),
  listPizzaSize: state.getIn(['PizzaCreatorAppForm', 'listPizzaSize']).toJS(),
  details: state.getIn(['PizzaCreatorAppForm', 'details']).toJS(),
  placeOrderError: state.getIn(['PizzaCreatorAppForm', 'placeOrderError']),
});

export const mapDispatchToProps = dispatch => ({
  setSelectedTopping(newList) {
    const action = actionCreators.setSelectedToppingAction(newList);
    dispatch(action);
  },
  handleSelectedSize(sizeName, sizePrice) {
    const action = actionCreators.handleSelectedSizeAction(sizeName, sizePrice);
    dispatch(action);
  },
  handleInputChange(event, name) {
    const action = actionCreators.handleInputChangeAction(event, name);
    dispatch(action);
  },
  handleClickPlaceOrder(selectedToppings) {
    if (selectedToppings.length === 0) {
      const action = actionCreators.onClickPlaceOrderAction();
      dispatch(action);
    }
  },
});

PizzaCreatorAppForm.propTypes = {
  selectedToppings: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
  selectedPizza: PropTypes.shape({
    sizeName: PropTypes.string,
    sizePrice: PropTypes.string,
  }),
  listPizzaSize: PropTypes.arrayOf(PropTypes.object).isRequired,
  details: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    confirmEmail: PropTypes.string,
    address: PropTypes.string,
    postcode: PropTypes.string,
    contactNumber: PropTypes.string,
  }),
  placeOrderError: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSelectedSize: PropTypes.func.isRequired,
  handleClickPlaceOrder: PropTypes.func.isRequired,
  setSelectedTopping: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaCreatorAppForm);
