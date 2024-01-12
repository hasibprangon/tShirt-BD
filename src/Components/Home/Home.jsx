import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData();
   const [cart, setCart] = useState([]);

    const handleAddToCart = (tShirts) =>{
        console.log(tShirts);
    }
    return (
        <div className='home-container'>
            <div className='t-Shirt-container'>
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart ={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;