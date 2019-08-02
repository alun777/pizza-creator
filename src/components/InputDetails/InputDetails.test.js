import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { InputDetails, mapStateToProps, mapDispatchToProps } from './InputDetails';

const setup = () => {
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
  const wrapper = shallow(<InputDetails {...props} />);
  const inputElement = wrapper.find('input');

  return {
    props,
    wrapper,
    inputElement
  }
}

describe('testing mapStateToProps and mapDispatchToProps', ()=>{
  it('should show the correct detailsError value', ()=>{
    const initialState = fromJS({
      InputDetails: {
        detailsError: {jest:'test'}
      }
    })
    expect(mapStateToProps(initialState).detailsError).toEqual({jest:'test'})
  })
  it('should dispatch the correct action', () => { 
    const dispatch = jest.fn();
    
    mapDispatchToProps(dispatch).handleShowError();

    expect(dispatch).toHaveBeenCalled();
  }) 
})


describe('testing component', () => {
  it('input can be rendered', () => {
    const { inputElement } = setup();
    expect(inputElement.length).toBe(1);
  });

  it('input show the value coming from props', () => {
    const { inputElement, props } = setup();
    expect(inputElement.props().value).toEqual(props.details.name)
  });

  it('should trigger the correct function callbacks when got changed and blur', () => {
    const { props, inputElement } = setup();
    inputElement.simulate('blur');
    expect(props.handleShowError).toHaveBeenCalled();
    inputElement.simulate('change');
    expect(props.handleInputChange).toHaveBeenCalled();
  });

})



