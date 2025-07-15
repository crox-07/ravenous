import React from 'react';
import ReactDOM from 'react-dom';
import './Business.css';

const businesses = [
    {
    imageSrc: "https://www.honestburgers.co.uk/wp-content/uploads/2024/01/triple_014-1.jpg",
    name: 'Honest Burgers South Kensington',
    address: '24 Thurloe St',
    city: 'London',
    postcode: 'SW7 2LT',
    category: 'Burgers',
    rating: 4.6,
    reviewCount: 75,
    },
];

function Business({imageSrc, name, address, city, postcode, category, rating, reviewCount}) {
    return (
            <div className='Business'>
            <div className='Business-image'>
            <img src={imageSrc}/>
            </div>
            <h2>{name}</h2>
            <div className='Business-content'>
                <div className='Business-information'>
                    <p>{address}</p>
                    <p>{city}</p>
                    <p>{postcode}</p>
                </div>
                <div className='Business-reviews'>
                    <p className='category'>{category}</p>
                    <p className='rating'>{rating} stars</p>
                    <p className='review-count'>{reviewCount} reviews</p>
                </div>
            </div>
        </div>
    );
}

function BusinessList() {
    return (
        <div className="BusinessList">
            {businesses.map((business, index) => {
                return (
                <Business 
                key={index}
                imageSrc={business.imageSrc}
                name={business.name}
                address={business.address}
                city={business.city}
                postcode={business.postcode}
                category={business.category}
                rating={business.rating}
                reviewCount={business.reviewCount}
                />
                )
            })}
        </div>
    );
}



export { Business, BusinessList }