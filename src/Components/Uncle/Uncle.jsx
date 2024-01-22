import React, { useContext } from 'react';
import Cousin from './Cousin/Cousin';
import { MoneyContext } from '../GrandPa/GrandPa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>uncle</h3>
            <p><small>Grand-Pa money: {money}</small></p>
            <button onClick={() => setMoney(money + 1000)}>Send Money</button>
            <section className='flex'>
                <Cousin>Rahim</Cousin>
                <Cousin>Karim</Cousin>
            </section>
        </div>
    );
};

export default Uncle;