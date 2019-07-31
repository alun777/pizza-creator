import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { actionCreators, constants } from './index';

Enzyme.configure({ adapter: new Adapter() });

it('should create an action to toggle the state of scroll top', () => {
  const showScrollTop = true;
  const expectedAction = {
    type: constants.TOGGLE_SCROLL_TOP,
    showScrollTop
  }
  expect(actionCreators.toggleScrollTop(showScrollTop)).toEqual(expectedAction)
})