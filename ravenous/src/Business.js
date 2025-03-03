import React from 'react';

const businessObject = {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

function Business(){
    return (
        <div className = "business">
            <img src='' alt=''/>
            <h2>Business Name</h2>
            <p>Address</p>
            <p>City</p>
            <p>State, Zip</p>
            <p>Category</p>
            <p>Rating</p>
            <p>review count</p>
        </div>
    );
}