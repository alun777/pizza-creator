import React from 'react';
import { connect } from 'react-redux';
import ToppingList from '../ToppingList/index';


const ToppingsSection = (props) => {
  const { selectedToppings, onAmountAdd, onAmountMinus } = props
  const { toppingsList } = props
  return (
    <React.Fragment>
      <section className="section toppings">
        <h2 className="section__title">Choose your toppings</h2>
        <div className="toppings__container">
          {
            toppingsList.map(({ id, srcImg, name, price }) => {
              return (
                <ToppingList
                  price={price}
                  id={id}
                  srcImg={srcImg}
                  name={name} key={id}
                  selectedToppings={selectedToppings}
                  onAmountAdd={onAmountAdd}
                  onAmountMinus={onAmountMinus}
                />
              )
            })
          }
        </div>
      </section>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    toppingsList: state.ToppingsSection.toppingsList
  }
}

export default connect(mapStateToProps, null)(ToppingsSection);
