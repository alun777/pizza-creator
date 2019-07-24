import React from 'react';
import PizzaSize from '../PizzaSize/index';


const SizesSections = ({ selectedPizzaSize, handleSelectedSize, listPizzaSize }) => {
  
  return (
    <section className="section sizes">
      <h2 className="section__title">Select your size</h2>
      <div className="sizes__container">
        {listPizzaSize.map(({ name, price }) => {
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

export default SizesSections;
