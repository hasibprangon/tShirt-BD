import React from 'react';
import Cousin from './Cousin/Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>uncle</h3>
            <section className='flex'>
                <Cousin>Rahim</Cousin>
                <Cousin>Karim</Cousin>
            </section>
        </div>
    );
};

export default Uncle;