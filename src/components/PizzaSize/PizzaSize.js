import React from 'react';
import pizzaImg from '../../assets/size.png';

const PizzaSize = ({ name, price, handleSelectedSize, selectedPizzaSize }) => {

  const getPizzaSizeClassName = () => {
    const opacityClassName = selectedPizzaSize? 'size__opacity' : '';
    if (selectedPizzaSize === name) {
      return `size size__${name} size__active`
    } else {
      return `size size__${name} ${opacityClassName}`
    }
  }

  return (
    <div
      className={getPizzaSizeClassName()}
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
  );
}

export default PizzaSize;
