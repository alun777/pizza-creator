import React from 'react';
import { shallow, mount } from 'enzyme';
import { fromJS } from 'immutable';

import { BackTop, mapStateToProps, mapDispatchToProps } from './BackTop';

const props = {
  showScrollTop: true,
  changeScrollTop: jest.fn(),
  dispatch: jest.fn()
}

let wrapper
beforeEach(() => {
  wrapper = shallow(<BackTop {...props} />)
})

describe('testing component', () => {
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
})

describe('testing lifeCycleHook', () => {
  it('should call the correct function when lifecycle triggers', () => {
    const map = {};
    window.addEventListener = jest.fn((event, callback)=>{
      map[event] = callback
    })
    const sWrapper = shallow(<BackTop {...props} />)
    map.scroll({scrollTop: '200'})
    expect(props.changeScrollTop).toHaveBeenCalled()
  })

  it('should call changeScrollTop when scroll', ()=>{
    const mWrapper = mount(<BackTop {...props} />)
    const domNode = mWrapper.getDOMNode()
    const event = new Event('scroll');
    domNode.dispatchEvent(event);
    expect(props.changeScrollTop).toHaveBeenCalled()
  })
})


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





