import React from 'react';
import SubmitButton from '../SubmitButton';

const SummarySection =({ 
  selectedToppings, 
  selectedPizza, 
  summaryTotalPrice, 
  onAmountAdd, 
  onAmountMinus,
  onClickPlaceOrder
 }) => {
  const { sizePrice, sizeName } = selectedPizza;
  return (
    <section className="section summary">
      <h2 className="section__title">Summary</h2>
      <ul className="items">
        <li className="item">
          <span className="item__name">{sizeName? `Pizza (${sizeName})` : ''}</span>
          <span className="item__price">{sizePrice? `$${sizePrice}`: ''}</span>
        </li>
        {
          selectedToppings.map(({ name, price, amount }) => {
            return  amount > 0 && (
              <li className="item" key={name} data-test='test'>
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
        <SubmitButton onClickPlaceOrder={onClickPlaceOrder}/>
      </p>
    </section>
  )
}

export default SummarySection;
