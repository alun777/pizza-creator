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
      case 'small':
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
      case 'medium':
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
      case 'large':
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
          <div
            className={this.state.sizeSelected.selectSmall ? "size size__small size__active" : "size size__small"}
            onClick={() => { this.handleSelectedSize('small') }}
          >
            <img src={pizzaImg} alt="Small" />
            <div>
              Small
            <br />
              <span className="size__price">$9.99</span>
            </div>
          </div>
          <div className={this.state.sizeSelected.selectMedium ? "size size__medium size__active" : "size size__medium"}
            onClick={() => { this.handleSelectedSize('medium') }}
          >
            <img src={pizzaImg} alt="Medium" />
            <div>
              Medium
            <br />
              <span className="size__price">$10.99</span>
            </div>
          </div>
          <div className={this.state.sizeSelected.selectLarge ? "size size__large size__active" : "size size__large"}
            onClick={() => { this.handleSelectedSize('large') }}
          >
            <img src={pizzaImg} alt="Large" />
            <div>
              Large
            <br />
              <span className="size__price">$11.99</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SizesSections;
