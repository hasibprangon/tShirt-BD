import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css'
export const RingContext = createContext('gold')
const GrandPa = () => {
    const ring = 'diamond';

    return (
        <div className='grand-pa'>
            <h3>grandpa</h3>
            <RingContext.Provider value='golden ring'>
                <section className='flex'>
                    <Father ring={ring}></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </RingContext.Provider>
        </div>
    );
};

export default GrandPa;


/**
 * 1: create context
*/