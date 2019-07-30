import React from 'react';
import { connect } from 'react-redux';
import ToppingList from '../ToppingList/index';

const ToppingsSection = ({ selectedToppings, onAmountAdd, onAmountMinus, toppingsList }) => {
  return (
    <section className="section toppings">
      <h2 className="section__title">Choose your toppings</h2>
      <div className="toppings__container">
        {
          toppingsList.map(({ id, srcImg, name, price }) => {
            return (
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
            )
          })
        }
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    toppingsList: state.getIn(['ToppingsSection', 'toppingsList']).toJS()
  }
}

export default connect(mapStateToProps, null)(ToppingsSection);
