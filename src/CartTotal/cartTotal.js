import React, { Component } from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class CartTotal extends Component {
  
    render() {
        const {selected={}} = this.props;

        const total = Object.keys(selected).reduce(
            (acc, curr) => acc + selected[curr].cost,
            0
          );
          const newTotal = USCurrencyFormat.format(total);
        
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


