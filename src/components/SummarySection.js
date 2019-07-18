import React, {Component} from 'react';

class SummarySection extends Component {

  render(){
    return (
    <section class="section summary">
      <h2>Summary</h2>
      <ul class="items">
        <li class="item">
          <span class="item__name">Pizza (Small)</span>
          <span class="item__price">$9.99</span>
        </li>
        <li class="item">
          <span class="item__name">Olive</span>
          <span class="item__price">$0.99</span>
        </li>
        <li class="item">
          <span class="item__name">Peppers</span>
          <span class="item__price">$0.99</span>
        </li>
        <li class="item">
          <span class="item__name">Pepperoni</span>
          <span class="item__price">$0.99</span>
        </li>
      </ul>
      <hr/>
      <p class="summary__total">
        <span>Total:</span>
        <span>$ 12.96</span>
      </p>
      <p>
        <button type="submit">
          Place order
        </button>
      </p>
    </section>
    )
  }
}

export default SummarySection;
