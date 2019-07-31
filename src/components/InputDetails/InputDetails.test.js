import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { InputDetails } from './InputDetails';

Enzyme.configure({ adapter: new Adapter() });

const setup = ()=> {
  const props = {
    label: 'name',
    detailName: 'name',
    details: {
      name: ''
    },
    handleInputChange: jest.fn(),
    handleShowError: jest.fn(),
    detailsError: {
      name: false
    }
  }
  const shallowWrapper = shallow(<InputDetails {...props}/>);
  const inputElement = shallowWrapper.find('input');

  return {
    props,
    shallowWrapper,
    inputElement
  }
}

it('input can be rendered', () => {
  const { inputElement } =setup();
  expect(inputElement.length).toBe(1);
});

it('input show the value coming from props', () => {
  const { inputElement, props } =setup();
  expect(inputElement.props().value).toEqual(props.details.name)
});

it('should trigger the correct function callbacks when got changed and blur', () => {
  const { props, inputElement } =setup();
  inputElement.simulate('blur');
  expect(props.handleShowError).toHaveBeenCalled();
  inputElement.simulate('change');
  expect(props.handleInputChange).toHaveBeenCalled();
});
