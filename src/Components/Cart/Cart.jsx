import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add atleast one product</p>
    }
    else {
        message = <div>
            <h3>Thanks</h3>
            <p>For buy something from us</p>
        </div>
    }
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {cart.length > 2 ? <span>I think you want to buy more</span> : <span>If you don't have money than what should I do?</span>}
            {message}
            {
                cart.map(tShirt => <p
                    key={tShirt._id}
                >{tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt._id)}>Delete</button>
                </p>)
            }
            {
                cart.length === 4 && <small>thanks for supporting us</small>
            }
            {
                cart.length > 3 || <h3>you should add more than 3 items</h3>
            }
        </div>
    );
};

export default Cart;

/*
SYSTEM OF CONDITIONAL RENDERIGN
S1:use if else to set a variable that will contain an element, components or anything
S2:ternary:  condition ? 'for true' : 'false'
S3: logical &&: (if the condition is true then the next thing will be displayed)
S4: logical ||(OR): (if the condition is true then the next thing will be displayed)
*/