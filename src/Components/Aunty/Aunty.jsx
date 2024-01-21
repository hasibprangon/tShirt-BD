import React from 'react';
import Cousin from '../Uncle/Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
            <h3>Aunty</h3>
            <section className='flex'>
                <Cousin>Jodu</Cousin>
                <Cousin>Modhu</Cousin>
            </section>
        </div>
    );
};

export default Aunty;