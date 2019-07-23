import React, { Component } from 'react';
import PizzaSize from '../PizzaSize/index';

class SizesSections extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { selectedPizzaSize, handleSelectedSize } = this.props
    return (
      <section className="section sizes">
        <h2 className="section__title">Select your size</h2>
        <div className="sizes__container">
          {[{
            name: 'Small',
            price: 9.99
          }, {
            name: 'Medium',
            price: 10.99
          }, {
            name: 'Large',
            price: 11.99
          }].map(({ name, price }) => {
            return (
              <PizzaSize 
                key={name}
                selectedPizzaSize={selectedPizzaSize}
                name={name}
                price={price}
                handleSelectedSize={handleSelectedSize}
              />
            )
          })
          }
        </div>
      </section>
    )
  }
}

export default SizesSections;
