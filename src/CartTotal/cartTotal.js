import React, { Component } from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class CartTotal extends Component {
    render() {
        console.log(this.props.total)
        const total = Object.keys(this.props.total).reduce(
            (acc, curr) => acc + this.props.total[curr].cost,
            0
          );
          const newTotal = USCurrencyFormat.format(total);
          console.log(newTotal)
        
        return (
            <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value"></div>
            {newTotal}
            </div>
        )
    }
}

export default CartTotal


