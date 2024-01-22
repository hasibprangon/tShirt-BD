import React, { useContext } from 'react';
import { MoneyContext } from '../../GrandPa/GrandPa';

const Brother = () => {
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h3>Brother: {money}</h3>
           
        </div>
    );
};

export default Brother;