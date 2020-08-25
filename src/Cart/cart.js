import React, { Component } from 'react';
import CartTotal from '../CartTotal/cartTotal';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });


  // Rewrite as a fucntional component 
class Cart extends Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];

      
            return (
                
                <div className="summary__option" key={featureHash}> 
                <div className="summary__option__label">{feature} </div> 
                <div className="summary__option__value">{selectedOption.name}</div> 
                <div className="summary__option__cost" key={this.props.selected.Display.cost}> 
                {USCurrencyFormat.format(selectedOption.cost)} </div> 
                </div> 
            );
          });
        return (
            <>
            <div>
                <section className="main__summary"> 
                    <h2>Your cart</h2>
                    {summary}
                    <CartTotal 
                    {...this.props}/>
                </section>
            </div>
            </>
        )
    }
}

export default Cart; 


