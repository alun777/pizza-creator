import App from './App'
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', ()=>{
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
