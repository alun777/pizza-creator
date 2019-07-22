import React, { Component } from 'react';
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
    this.state = {
      toppingsList: [{
        id: 0,
        name: 'Anchovy',
        srcImg: 'assets/toppings/anchovy.svg',
        price: 0.99,
        isChosen: false
      }, {
        id: 1,
        name: 'Bacon',
        srcImg: 'assets/toppings/bacon.svg',
        price: 0.99,
        isChosen: false
      }, {
        id: 2,
        name: 'Chili',
        srcImg: 'assets/toppings/chili.svg',
        price: 0.99,
        isChosen: false
      }, {
        id: 3,
        name: 'Basil',
        srcImg: 'assets/toppings/basil.svg',
        price: 0.99,
        isChosen: false
      }, {
        id: 4,
        name: 'Mozzarella',
        srcImg: 'assets/toppings/mozzarella.svg',
        price: 0.99,
        isChosen: false
      }, {
        id: 5,
        name: 'Mushroom',
        srcImg: 'assets/toppings/mushroom.svg',
        price: 0.99,
        isChosen: false
      }, {
        id: 6,
        name: 'Olive',
        srcImg: 'assets/toppings/olive.svg',
        price: 0.99,
        isChosen: false
      }, {
        id: 7,
        name: 'Onion',
        srcImg: 'assets/toppings/onion.svg',
        price: 0.99,
        isChosen: false
      }, {
        id: 8,
        name: 'Pepper',
        srcImg: 'assets/toppings/pepper.svg',
        price: 0.99,
        isChosen: false
      }, {
        id: 9,
        name: 'Pepperoni',
        srcImg: 'assets/toppings/pepperoni.svg',
        price: 0.99,
        isChosen: false
      }, {
        id: 10,
        name: 'Peppers',
        srcImg: 'assets/toppings/peppers.svg',
        price: 0.99,
        isChosen: false
      }, {
        id: 11,
        name: 'Sweetcorn',
        srcImg: 'assets/toppings/sweetcorn.svg',
        price: 0.99,
        isChosen: false
      }]
    }
    this.handleToppingClick = this.handleToppingClick.bind(this);
  }

  handleToppingClick(toppingListId) {
    const newList = [...this.state.toppingsList]
    newList[toppingListId].isChosen = !newList[toppingListId].isChosen
    this.setState({
      toppingsList: newList
    })
  }


  render() {
    return (
      <React.Fragment>
        <section className="section toppings">
          <h2>Choose your toppings</h2>
          <div className="toppings__container">
            {
              this.state.toppingsList.map((item) => {
                const toppingListId = item.id
                const toppingActiveClassName = item.isChosen ? "topping topping__active" : "topping"
                return (
                  <div
                    className={toppingActiveClassName}
                    key={toppingListId}
                    onClick={() => { this.handleToppingClick(toppingListId) }}
                  >
                    <img src={item.srcImg} alt={item.name}></img>
                    <span>{item.name}</span>
                  </div>
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
