import React from 'react';
import PizzaSize from '../PizzaSize/index';

const SizesSections = ({ selectedPizza, handleSelectedSize, listPizzaSize }) => {
  
  return (
    <section className="section sizes">
      <h2 className="section__title">Select your size</h2>
      <div className="sizes__container">
        {listPizzaSize.map(({ sizeName, sizePrice }) => {
          return (
            <PizzaSize
              key={sizeName}
              selectedPizza={selectedPizza}
              sizeName={sizeName}
              sizePrice={sizePrice}
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
