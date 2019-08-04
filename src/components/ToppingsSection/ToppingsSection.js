import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ToppingList from '../ToppingList/index';

export const ToppingsSection = ({
  selectedToppings, onAmountAdd, onAmountMinus, toppingsList,
}) => (
  <section className="section toppings">
    <h2 className="section__title">Choose your toppings</h2>
    <div className="toppings__container">
      {
        toppingsList.map(({
          id, srcImg, name, price,
        }) => (
          <ToppingList
            toppingPrice={price}
            toppingName={name}
            id={id}
            key={id}
            srcImg={srcImg}
            selectedToppings={selectedToppings}
            onAmountAdd={onAmountAdd}
            onAmountMinus={onAmountMinus}
          />
        ))
      }
    </div>
  </section>
);

export const mapStateToProps = state => ({
  toppingsList: state.getIn(['ToppingsSection', 'toppingsList']).toJS(),
});


ToppingsSection.propTypes = {
  selectedToppings: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
  onAmountAdd: PropTypes.func.isRequired,
  onAmountMinus: PropTypes.func.isRequired,
  toppingsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(ToppingsSection);
