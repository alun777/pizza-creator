import React, { Component } from 'react';
import pizzaImg from '../../assets/size.png';


class PizzaSize extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getPizzaSizeClassName(){
    const { selectedPizzaSize, name } = this.props;
    const opacityClassName = selectedPizzaSize ? 'size__opacity' : '';
    if (selectedPizzaSize === name ){
      return `size size__${name} size__active`
    } else {
      return `size size__${name} ${opacityClassName}`
    }
  }

  render() {
    const { name, price, handleSelectedSize } = this.props
    return (
      <div
        className={this.getPizzaSizeClassName()}
        onClick={() => handleSelectedSize(name, price)}
        key={name}
      >
        <img src={pizzaImg} alt={name} />
        <div>
          {name}
          <br />
          <span className="size__price">${price}</span>
        </div>
      </div>

    )
  }
}

export default PizzaSize;
