import React, { Component } from 'react';
import pizzaImg from '../assets/size.png';

class SizesSections extends Component {

  render() {
    return (
      <section className="section sizes">
        <h2>Select your size</h2>
        <div className="sizes__container">
          <div className="size size__small size__active">
            <img src={pizzaImg} alt="Small" />
            <div>
              Small
            <br />
              <span className="size__price">$9.99</span>
            </div>
          </div>
          <div className="size size__medium">
            <img src={pizzaImg} alt="Medium" />
            <div>
              Medium
            <br />
              <span className="size__price">$10.99</span>
            </div>
          </div>
          <div className="size size__large">
            <img src={pizzaImg} alt="Large" />
            <div>
              Large
            <br />
              <span className="size__price">$11.99</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SizesSections;
