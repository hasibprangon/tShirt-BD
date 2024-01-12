import React from 'react';
import './TShirt.css'
const TShirt = ({tShirt, handleAddToCart}) => {
    const {_id, name, price, picture} = tShirt;
    return (
        <div className='tShirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(_id)}>Buy Now</button>
        </div>
    );
};

export default TShirt;