import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DetailsSection from './DetailsSection';
import InputDetails from '../InputDetails/index';

Enzyme.configure({ adapter: new Adapter() });

const props = {
  handleInputChange: jest.fn(),
  details: {}
}

let wrapper
beforeEach(()=>{
  wrapper = shallow(<DetailsSection {...props}/>)
})

it('component should render six input detail length', ()=>{
  expect(wrapper.find(InputDetails).length).toEqual(6)
})

