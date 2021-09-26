import React from 'react';

const Cart = (props) => {
    
    const {cart} = props;
    let totalFee = 0;
    for(const price of cart){
        totalFee += parseInt(price.fee);
    }
    return (
        <div className="cart">
            <div className="cart-length">
                <h3>Total Registrants : {props.cart.length}</h3>
                <h3>Total Fee Earned: {totalFee}$</h3>
            </div>
        </div>
    );
};

export default Cart;