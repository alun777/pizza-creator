import React, { Component } from 'react';
import DetailsSection from './DetailsSection';
import SizesSections from './SizesSection';
import ToppingsSection from './ToppingsSection';
import SummarySection from './SummarySection';

class PizzaCreatorAppForm extends Component {

  render(){
    return (
      <section className="pizza__creator__app">
        <form action="">
          <DetailsSection></DetailsSection>
          <SizesSections></SizesSections>
          <ToppingsSection></ToppingsSection>
          <SummarySection></SummarySection>
        </form>
      </section>
    )
  }
}

export default PizzaCreatorAppForm;
