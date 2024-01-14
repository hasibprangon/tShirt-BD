import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';


const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tShirts) => {
        const exists = cart.find(ts => ts._id === tShirts._id);
        if (exists) {
            toast('This product already added')
        }
        else {

            const newCart = [...cart, tShirts];
            setCart(newCart);
        }
    }

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }
    return (
        <div className='home-container'>
            <div className='t-Shirt-container'>
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;