import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './Countrise.css'
const Countrise = () => {
    const [countrise,setCountrise]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountrise(data))
    })
    return (
        <div>
            <h1>Countrise:{countrise.length}</h1>
            <div className='countries-container'>
            {
                countrise.map(country => <Country key={country.cca2} country={country}></Country>)
            }
            </div>
        </div>
    );
};



export default Countrise;