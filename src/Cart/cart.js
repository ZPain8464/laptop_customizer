import React, { Component } from 'react';
import CartTotal from '../CartTotal/cartTotal';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });


  // Rewrite as a fucntional component 
class Cart extends Component {
    render() {
        const summary = Object.keys(this.props.cartItems).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.cartItems[feature];
            console.log(this.props.updateValue)
      
            return (
                <section className="main__summary"> 
                <div className="summary__option" key={featureHash}> 
                <div className="summary__option__label" key={this.props.cartItems.Display.name}>{feature} </div> 
                <div className="summary__option__value" key={this.props.cartItems['Operating System'].name}>{selectedOption.name}</div> 
                <div className="summary__option__cost" key={this.props.cartItems.Display.cost}> 
                {USCurrencyFormat.format(selectedOption.cost)} </div> 
                </div> 
                </section>
            );
          });
        return (
            <>
            <div>
                <h2>Your cart</h2>
                {summary}
                <CartTotal 
                total={this.props.cartItems}/>
            </div>
            </>
        )
    }
}

export default Cart; 


