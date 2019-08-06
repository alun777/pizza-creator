import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { PizzaCreatorAppForm, mapStateToProps, mapDispatchToProps } from './PizzaCreatorAppForm';
import { actionCreators } from './store/index';

const setup = () => {
  const props = {
    listPizzaSize: [{
      sizeName: 'Small',
      sizePrice: 9.99,
    }, {
      sizeName: 'Medium',
      sizePrice: 10.99,
    }, {
      sizeName: 'Large',
      sizePrice: 11.99,
    }],
    selectedToppings: [],
    selectedPizza: [{
      sizeName: '',
      sizePrice: 0,
    }],
    details: {
      name: '',
      email: '',
      confirmEmail: '',
      address: '',
      postcode: '',
      contactNumber: '',
    },
    placeOrderError: false,
    handleInputChange: jest.fn(),
    handleSelectedSize: jest.fn(),
    handleClickPlaceOrder: jest.fn(),
    setSelectedTopping: jest.fn,
  };

  const wrapper = shallow(<PizzaCreatorAppForm {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('testing component', () => {
  it('should render the correct component', () => {
    const { wrapper } = setup();

    expect(wrapper.find('section').hasClass('pizza__creator__app')).toBe(true);

    expect(wrapper.find('form')).toHaveLength(1);

    expect(wrapper.find('DetailsSection')).toHaveLength(1);
    expect(wrapper.find('SizesSections')).toHaveLength(1);
    expect(wrapper.find('SummarySection')).toHaveLength(1);
    expect(wrapper.find('SubmitErrorPrompt')).toHaveLength(1);

    expect(wrapper.find('SummarySection').props().handleClickPlaceOrder).toBeTruthy();

    const spyUpdateSelectedToppingAmount = jest.spyOn(wrapper.instance(), 'updateSelectedToppingAmount');
    const spyAddSelectToppingAmount = jest.spyOn(wrapper.instance(), 'addSelectToppingAmount');
    expect(spyUpdateSelectedToppingAmount).not.toHaveBeenCalled();
    spyAddSelectToppingAmount();
    expect(spyUpdateSelectedToppingAmount).toHaveBeenCalled();
  });

  it('should have correct functions in the prototype', () => {
    const { wrapper } = setup();

    const spyUpdateSelectedToppingAmount = jest.spyOn(wrapper.instance(), 'updateSelectedToppingAmount');
    const spyAddSelectToppingAmount = jest.spyOn(wrapper.instance(), 'addSelectToppingAmount');
    expect(spyUpdateSelectedToppingAmount).not.toHaveBeenCalled();
    spyAddSelectToppingAmount();
    expect(spyUpdateSelectedToppingAmount).toHaveBeenCalledTimes(1);

    const spyMinusSelectedToppingAmount = jest.spyOn(wrapper.instance(), 'minusSelectedToppingAmount');
    spyMinusSelectedToppingAmount();
    expect(spyUpdateSelectedToppingAmount).toHaveBeenCalledTimes(2);
  });
});

describe('testing mapStateToProps', () => {
  it('should show the correct detailsError value', () => {
    const initialState = fromJS({
      PizzaCreatorAppForm: {
        selectedToppings: [{ name: 'Chili', amount: 1, price: 0.99 }],
        selectedPizza: [{
          sizeName: 'Medium',
          sizePrice: 10.99,
        }],
        listPizzaSize: [],
        details: {},
        placeOrderError: true,
      },
    });

    expect(mapStateToProps(initialState).placeOrderError).toEqual(true);

    expect(mapStateToProps(initialState).selectedToppings).toEqual([{ name: 'Chili', amount: 1, price: 0.99 }]);

    expect(mapStateToProps(initialState).selectedPizza).toEqual([{ sizeName: 'Medium', sizePrice: 10.99 }]);
  });
});

describe('testing mapDispatchToProps', () => {
  it('should dispatch the correct action', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).setSelectedTopping();
    expect(dispatch).toHaveBeenCalledWith(actionCreators.setSelectedToppingAction());
    expect(dispatch).toHaveBeenCalledTimes(1);


    mapDispatchToProps(dispatch).handleInputChange();
    expect(dispatch).toHaveBeenCalledWith(actionCreators.handleInputChangeAction());
    expect(dispatch).toHaveBeenCalledTimes(2);


    mapDispatchToProps(dispatch).handleSelectedSize();
    expect(dispatch).toHaveBeenCalledWith(actionCreators.handleSelectedSizeAction());
    expect(dispatch).toHaveBeenCalledTimes(3);


    mapDispatchToProps(dispatch).handleClickPlaceOrder([]);
    expect(dispatch).toHaveBeenCalledTimes(4);
  });
});
