import React from 'react';

const businessList = []
const businessObject = {
    img: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zip: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

function Business(){
    return (
        <div className = "business">
            <img src={businessObject.img} alt={businessObject.name}/>
            <h2>{businessObject.name}</h2>
            <p>{businessObject.address}</p>
            <p>{businessObject.city}</p>
            <p>{businessObject.state}, {businessObject.zip}</p>
            <p>{businessObject.category}</p>
            <p>{businessObject.rating}</p>
            <p>{businessObject.reviewCount}</p>
        </div>
    );
}

function BusinessList(){
    return (
        <div className = "businessList">
            <Business/>
            <Business/>
            <Business/>
            <Business/>
            <Business/>
            <Business/>
        </div>

    )
}