import React from 'react';

const Cart = (props) => {
    
    const {cart} = props;
    let totalFee = 0;
    // Calculating total fee
    for(const price of cart){
        totalFee += parseInt(price.fee);
    }
    return (
        <div className="cart">
            <div className="cart-length">
                <h3 className='p-5'>Total Registrants : {props.cart.length}</h3>
                <h3 className='p-3'>Total Earned Fee : {totalFee}$</h3>
            </div>
        </div>
    );
};

export default Cart;