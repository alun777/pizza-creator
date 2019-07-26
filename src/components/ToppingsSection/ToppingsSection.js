import React, { Component } from 'react';
import ToppingList from '../ToppingList/index';
import store from '../../store/index';
// import anchovy from '../assets/toppings/anchovy.svg';
// import bacon from '../assets/toppings/bacon.svg';
// import basil from '../assets/toppings/basil.svg';
// import chili from '../assets/toppings/chili.svg';
// import mozzarella from '../assets/toppings/mozzarella.svg';
// import mushroom from '../assets/toppings/mushroom.svg';
// import olive from '../assets/toppings/olive.svg';
// import onion from '../assets/toppings/onion.svg';
// import pepper from '../assets/toppings/pepper.svg';
// import pepperoni from '../assets/toppings/pepperoni.svg';
// import peppers from '../assets/toppings/peppers.svg';
// import sweetcorn from '../assets/toppings/sweetcorn.svg';

class ToppingsSection extends Component {
  constructor(props) {
    super(props);
    
    this.state = store.getState();
    
    this.handleStoreChange = this.handleStoreChange.bind(this);
    
    store.subscribe(this.handleStoreChange);

  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  render() {
    const { selectedToppings, onAmountAdd, onAmountMinus } = this.props
    const { toppingsList } = this.state
    return (
      <React.Fragment>
        <section className="section toppings">
          <h2 className="section__title">Choose your toppings</h2>
          <div className="toppings__container">
            {
              toppingsList.map(({ id, srcImg, name, price }) => {
                return (
                  <ToppingList
                    price={price}
                    id={id}
                    srcImg={srcImg}
                    name={name} key={id}
                    selectedToppings={selectedToppings}
                    onAmountAdd={onAmountAdd}
                    onAmountMinus={onAmountMinus}
                  />
                )
              })
            }
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default ToppingsSection;
