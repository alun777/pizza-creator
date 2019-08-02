import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import { BackTop, mapStateToProps, mapDispatchToProps } from './BackTop';

const props = {
  showScrollTop: true
}

describe('testing mapStateToProps and mapDispatchToProps', () => {
  it('should show the correct showScrollTop value', () => {
    const initialState = fromJS({
      BackTop: {
        showScrollTop: true
      }
    })
    expect(mapStateToProps(initialState).showScrollTop).toEqual(true)
  })

  it('should dispatch the correct action', () => { 
    const dispatch = jest.fn();
    
    mapDispatchToProps(dispatch).changeScrollTop();

    expect(dispatch).toHaveBeenCalled();
  })
})


let wrapper
beforeEach(() => {
  wrapper = shallow(<BackTop {...props} />)
})

it('should have a correct iconfont element', () => {
  expect(wrapper.find('button').length).toBe(1);

  expect(wrapper.find('button').text()).toBeTruthy();
})

it('successfully calls the onClick handler', () => {
  expect(wrapper.find('button').length).toEqual(1)
  window.scrollTo = jest.fn()
  let prevented = false
  wrapper.find('button').simulate('click', {
    preventDefault: () => {
      prevented = true;
    },
  });
  expect(prevented).toBe(true);
  wrapper.find('button').simulate('click', {
    preventDefault: jest.fn()
  })
  expect(window.scrollTo).toHaveBeenCalled()
})

it('should match snapshot', () => {
  expect(wrapper).toMatchSnapshot()
})
