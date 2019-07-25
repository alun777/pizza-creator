import React from 'react';
import SubmitButton from '../SubmitButton';

const SummarySection =({ selectedToppings, selectedPizzaSize, summaryTotalPrice, selectedPizzaPrice, onAmountAdd, onAmountMinus }) => {

  return (
    <section className="section summary">
      <h2 className="section__title">Summary</h2>
      <ul className="items">
        <li className="item">
          <span className="item__name">{selectedPizzaSize? `Pizza (${selectedPizzaSize})` : ''}</span>
          <span className="item__price">{selectedPizzaPrice? `$${selectedPizzaPrice}`: ''}</span>
        </li>
        {
          selectedToppings.map(({ name, price, amount }) => {
            return  amount > 0 && (
              <li className="item" key={name}>
                <div className="item__name">
                  <span>{name}</span>
                  <div className="item__amount">
                    <button type="button" onClick={()=>onAmountMinus(name)}>-</button>
                    <span>{amount}</span>
                    <button type="button" onClick={()=>onAmountAdd(name)}>+</button>
                  </div>
                </div>
                <span className="item__price">${(price*amount).toFixed(2)}</span>
              </li>
            )
          })
        }
      </ul>
      <hr />
      <p className="summary__total">
        <span>Total:</span>
        <span>
          ${summaryTotalPrice}
        </span>
      </p>
      <p>
        <SubmitButton />
      </p>
    </section>
  )
}

export default SummarySection;
