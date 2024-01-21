import React from 'react';
import Spacial from './Spacial/Spacial';

const Myself = ({ring}) => {
    return (
        <div>
            <h3>My self</h3>
            <Spacial ring={ring}></Spacial>
        </div>
    );
};

export default Myself;