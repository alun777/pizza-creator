import React, { Component } from 'react';
import anchovy from '../assets/toppings/anchovy.svg';
import bacon from '../assets/toppings/bacon.svg';
import basil from '../assets/toppings/basil.svg';
import chili from '../assets/toppings/chili.svg';
import mozzarella from '../assets/toppings/mozzarella.svg';
import mushroom from '../assets/toppings/mushroom.svg';
import olive from '../assets/toppings/olive.svg';
import onion from '../assets/toppings/onion.svg';
import pepper from '../assets/toppings/pepper.svg';
import pepperoni from '../assets/toppings/pepperoni.svg';
import peppers from '../assets/toppings/peppers.svg';
import sweetcorn from '../assets/toppings/sweetcorn.svg';

class ToppingsSection extends Component {

  render() {
    return (
      <React.Fragment>
        <section class="section toppings">
          <h2>Choose your toppings</h2>
          <div class="toppings__container">
            <div class="topping">
              <img src={anchovy} alt="Anchovy"></img>
              <span>Anchovy</span>
            </div>
            <div class="topping">
              <img src={bacon} alt="Bacon"></img>
              <span>Bacon</span>
            </div>
            <div class="topping topping__active">
              <img src={basil} alt="Basil"></img>
              <span>Basil</span>
            </div>
            <div class="topping">
              <img src={chili} alt="Chili"></img>
              <span>Chili</span>
            </div>
            <div class="topping">
              <img src={mozzarella} alt="Mozzarella"></img>
              <span>Mozzarella</span>
            </div>
            <div class="topping">
              <img src={mushroom} alt="Mushroom"></img>
              <span>Mushroom</span>
            </div>
            <div class="topping">
              <img src={olive} alt="Olive"></img>
              <span>Olive</span>
            </div>
            <div class="topping">
              <img src={onion} alt="Onion"></img>
              <span>Onion</span>
            </div>
            <div class="topping">
              <img src={pepper} alt="Pepper"></img>
              <span>Pepper</span>
            </div>
            <div class="topping">
              <img src={pepperoni} alt="Pepperoni"></img>
              <span>Pepperoni</span>
            </div>
            <div class="topping">
              <img src={peppers} alt="Peppers"></img>
              <span>Peppers</span>
            </div>
            <div class="topping">
              <img src={sweetcorn} alt="Sweetcorn"></img>
              <span>Sweetcorn</span>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default ToppingsSection;
