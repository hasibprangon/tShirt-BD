import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add atleast one product</p>
    }
    else{
        message = <div>
            <h3>Thanks</h3>
            <p>For buy something from us</p>
        </div>
    }
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {message}
            {
                cart.map(tShirt => <p
                key={tShirt._id}
                >{tShirt.name}
                <button onClick={() => handleRemoveFromCart (tShirt._id)}>Delete</button>
                </p>)
            }
        </div>
    );
};

export default Cart;

/*
SYSTEM OF CONDITIONAL RENDERIGN
S1:use if else to set a variable that will contain an element, components or anything
*/