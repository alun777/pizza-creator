import React, { Component } from 'react';
import pizzaImg from '../../assets/size.png';

class SizesSections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeSelected:
      {
        selectSmall: false,
        selectMedium: false,
        selectLarge: false
      }
    }
    this.handleSelectedSize = this.handleSelectedSize.bind(this);
  }

  handleSelectedSize(size) {
    switch (size) {
      case 'Small':
        this.setState(() => {
          const newSizeSelected = {
            selectSmall: true,
            selectMedium: false,
            selectLarge: false
          }
          return {
            sizeSelected: newSizeSelected
          }
        })
        break;
      case 'Medium':
        this.setState(() => {
          const newSizeSelected = {
            selectSmall: false,
            selectMedium: true,
            selectLarge: false
          }
          return {
            sizeSelected: newSizeSelected
          }
        })
        break;
      case 'Large':
        this.setState(() => {
          const newSizeSelected = {
            selectSmall: false,
            selectMedium: false,
            selectLarge: true
          }
          return {
            sizeSelected: newSizeSelected
          }
        })
        break;
      default:
        return
    }
  }

  render() {
    return (
      <section className="section sizes">
        <h2 className="section__title">Select your size</h2>
        <div className="sizes__container">
          {[{
            name: 'Small',
            price: 9.99
          }, {
            name: 'Medium',
            price: 10.99
          }, {
            name: 'Large',
            price: 11.99
          }].map(({ name, price }) => {
            return (
              <div
                className={this.state.sizeSelected['select' + name] ? `size size__${name} size__active` : `size size__${name}`}
                onClick={() => { this.handleSelectedSize(name) }}
                key={name}
              >
                <img src={pizzaImg} alt={name} />
                <div>
                  {name}
                <br />
                <span className="size__price">${price}</span>
                </div>
              </div>
            )
          })
          }
        </div>
      </section>
    )
  }
}

export default SizesSections;
