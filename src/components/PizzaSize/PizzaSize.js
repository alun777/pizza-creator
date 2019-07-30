import React from 'react';
import pizzaImg from '../../assets/size.png';

const PizzaSize = ({ sizeName, sizePrice, handleSelectedSize, selectedPizza }) => {

  const getPizzaSizeClassName = () => {
    const opacityClassName = selectedPizza.sizeName? 'size__opacity' : '';
    if (selectedPizza.sizeName === sizeName) {
      return `size size__${sizeName} size__active`
    } else {
      return `size size__${sizeName} ${opacityClassName}`
    }
  }

  return (
    <div
      className={getPizzaSizeClassName()}
      onClick={() => handleSelectedSize(sizeName, sizePrice)}
      key={sizeName}
    >
      <img src={pizzaImg} alt={sizeName} />
      <div>
        {sizeName}
        <br />
        <span className="size__price">${sizePrice}</span>
      </div>
    </div>
  );
}

export default PizzaSize;
