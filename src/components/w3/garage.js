import React, {  } from 'react';
import Car from './car';

function Garage(props) {
    // const carBrand = "Ford";
    return (
        <>
            <h1>Who lives in my Garage?</h1>
            <Car {...props}/>
        </>
    )
}

export default Garage;