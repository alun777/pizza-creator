import React, { Component } from 'react';

import SizesSections from '../SizesSection/index';
import ToppingsSection from '../ToppingsSection/index';
import SummarySection from '../SummarySection/index';
import DetailsSection from '../DetailsSection/index';

class PizzaCreatorAppForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summaryToppingList: []
    }
  }

  addToSummaryList = (toppingListId)=> {
    if (toppingListId != null){
      console.log(toppingListId)
    }
  }

  render() {
    return (
      <section className="pizza__creator__app">
        <form action="">
          <DetailsSection></DetailsSection>
          <SizesSections></SizesSections>
          <ToppingsSection addToSummaryList={this.addToSummaryList}></ToppingsSection>
          <SummarySection></SummarySection>
        </form>
      </section>
    )
  }
}

export default PizzaCreatorAppForm;
