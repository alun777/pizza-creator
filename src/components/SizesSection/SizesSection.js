import React from 'react';
import PropTypes from 'prop-types';
import PizzaSize from '../PizzaSize/index';

const SizesSections = ({ selectedPizza, handleSelectedSize, listPizzaSize }) => (
  <section className="section sizes">
    <h2 className="section__title">Select your size</h2>
    <div className="sizes__container">
      {listPizzaSize.map(({ sizeName, sizePrice }) => (
        <PizzaSize
          key={sizeName}
          selectedPizza={selectedPizza}
          sizeName={sizeName}
          sizePrice={sizePrice}
          handleSelectedSize={handleSelectedSize}
        />
      ))
      }
    </div>
  </section>
);

SizesSections.propTypes = {
  selectedPizza: PropTypes.shape({
    sizeName: PropTypes.string,
    sizePrice: PropTypes.number,
  }),
  handleSelectedSize: PropTypes.func.isRequired,
  listPizzaSize: PropTypes.arrayOf(PropTypes.shape({
    sizeName: PropTypes.string,
    sizePrice: PropTypes.number,
  })).isRequired,
};

export default SizesSections;
