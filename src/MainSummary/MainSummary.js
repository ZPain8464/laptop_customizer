import React from 'react';
import Cart from '../Cart/cart';
import CartTotal from '../CartTotal/cartTotal';

function MainSummary(props) {
    return (
        <div>
            <section className="main__summary"> 
                <h2>Your cart</h2>
                <Cart 
                {...props}/>
                <CartTotal 
                {...props}/> 
            </section>
        </div>
    )
}

export default MainSummary