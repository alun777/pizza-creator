import React, { Component } from 'react';
import pizzaImg from '../assets/size.png';

class SizesSections extends Component {

  render() {
    return (
      <section class="section sizes">
        <h2>Select your size</h2>
        <div class="sizes__container">
          <div class="size size__small size__active">
            <img src={pizzaImg} alt="Small" />
            <div>
              Small
            <br />
              <span class="size__price">$9.99</span>
            </div>
          </div>
          <div class="size size__medium">
            <img src={pizzaImg} alt="Medium" />
            <div>
              Medium
            <br />
              <span class="size__price">$10.99</span>
            </div>
          </div>
          <div class="size size__large">
            <img src={pizzaImg} alt="Large" />
            <div>
              Large
            <br />
              <span class="size__price">$11.99</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SizesSections;
