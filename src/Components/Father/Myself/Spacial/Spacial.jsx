import React, { useContext } from 'react';
import { RingContext } from '../../../GrandPa/GrandPa';

const Spacial = ({ring}) => {

    const GldnRing = useContext(RingContext);
    return (
        <div>
            <h3>Spacial</h3>
            <p><small>{ring}</small></p>
            <p><small>{GldnRing}</small></p>
        </div>
    );
};

export default Spacial;