import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts = useLoaderData();
    console.log(tShirts);
    return (
        <div>
            <h2>There are {tShirts.length} pices of tShirt</h2>
        </div>
    );
};

export default Home;