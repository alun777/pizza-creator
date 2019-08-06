import React from 'react';
import { shallow, mount } from 'enzyme';
import { fromJS } from 'immutable';

import { BackTop, mapStateToProps, mapDispatchToProps } from './BackTop';

const props = {
  showScrollTop: true,
  changeScrollTop: jest.fn(),
  dispatch: jest.fn(),
};

describe('testing component', () => {
  it('should have a correct iconfont element', () => {
    const wrapper = shallow(<BackTop {...props} />);

    expect(wrapper.find('button')).toHaveLength(1);

    expect(wrapper.find('button').text()).toBeTruthy();
  });

  it('successfully calls the onClick handler', () => {
    const spyFunction = jest.spyOn(BackTop.prototype, 'handleScrollTop');
    const wrapper = shallow(<BackTop {...props} />);
    const scrollToSpy = jest.fn();
    global.scrollTo = scrollToSpy;
    const fakeEvent = { preventDefault: jest.fn() };
    wrapper.find('button').simulate('click', fakeEvent);
    expect(spyFunction).toHaveBeenCalled();
  });
  it('should match snapshot', () => {
    const wrapper = shallow(<BackTop {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe('testing lifeCycleHook', () => {
  it('should call the correct function when lifecycle triggers', () => {
    const map = {};
    window.addEventListener = jest.fn((event, callback) => {
      map[event] = callback;
    });
    const sWrapper = shallow(<BackTop {...props} />);
    map.scroll({ scrollTop: '200' });
    expect(props.changeScrollTop).toHaveBeenCalled();
    sWrapper.unmount();
  });

  it('should call changeScrollTop when scroll', () => {
    const wrapper = shallow(<BackTop {...props} />);

    const mWrapper = mount(<BackTop {...props} />);
    const domNode = mWrapper.getDOMNode();
    const event = new Event('scroll');
    domNode.dispatchEvent(event);
    expect(props.changeScrollTop).toHaveBeenCalled();

    const spy = jest.spyOn(wrapper.instance(), 'componentWillUnmount');
    expect(spy).not.toHaveBeenCalled();
  });
});

describe('testing mapStateToProps and mapDispatchToProps', () => {
  it('should show the correct showScrollTop value', () => {
    const initialState = fromJS({
      BackTop: {
        showScrollTop: true,
      },
    });
    expect(mapStateToProps(initialState).showScrollTop).toEqual(true);
  });

  it('should dispatch the correct action', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).changeScrollTop();

    expect(dispatch).toHaveBeenCalled();
  });
});
