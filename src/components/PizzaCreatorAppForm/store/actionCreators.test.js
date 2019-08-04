import { fromJS } from 'immutable';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { actionCreators, constants } from './index';

it('should create an action to pass a immutable new list', () => {
  const newList = [];
  const expectedAction = {
    type: constants.CHANGE_SELECTED_TOPPINGS,
    newList: fromJS(newList),
  };
  expect(actionCreators.setSelectedToppingAction(newList)).toEqual(expectedAction);
});

it('should create an action to pass a selected pizza size', () => {
  const sizePrice = 9.99;
  const sizeName = 'Small';
  const expectedAction = {
    type: constants.CHANGE_PIZZA_SIZE,
    sizeName,
    sizePrice,
  };
  expect(actionCreators.handleSelectedSizeAction(sizeName, sizePrice)).toEqual(expectedAction);
});

it('should create an action to change input', () => {
  const name = 'name';
  const event = <div />;
  const expectedAction = {
    type: constants.CHANGE_DETAILS,
    event,
    name,
  };
  expect(actionCreators.handleInputChangeAction(event, name)).toEqual(expectedAction);
});


describe('async actions', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  jest.useFakeTimers();
  it('action got dispatched', (done) => {
    const store = mockStore({});
    const { dispatch } = store;

    actionCreators.onClickPlaceOrderAction()(dispatch);
    let expectedAction = { type: 'changePlaceOrderError', placeOrderError: true };
    expect(store.getActions()[0]).toEqual(expectedAction);

    setTimeout(() => {
      expectedAction = { type: 'changePlaceOrderError', placeOrderError: false };
      expect(store.getActions()[1]).toEqual(expectedAction);
      done();
    }, 3000);
    jest.runAllTimers();
  });

  it('sets placeOrderError to false after three seconds', (done) => {
    const expectedActions = placeOrderError => ([{
      type: constants.CHANGE_PLACE_ORDER_ERROR,
      placeOrderError,
    }]);

    const onClickPlaceOrderToggleAction = placeOrderError => ({
      type: constants.CHANGE_PLACE_ORDER_ERROR,
      placeOrderError,
    });

    let store = mockStore({});
    const onClickPlaceOrderAction = () => () => {
      let action = onClickPlaceOrderToggleAction(true);
      store.dispatch(action);
      expect(store.getActions()).toEqual(expectedActions(true));
      setTimeout(() => {
        action = onClickPlaceOrderToggleAction(false);
        store = mockStore({});
        store.dispatch(action);
        expect(store.getActions()).toEqual(expectedActions(false));
        done();
      }, 3000);
      jest.runAllTimers();
    };

    store.dispatch(onClickPlaceOrderAction());
  });
});
