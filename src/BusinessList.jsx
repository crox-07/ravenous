import React from 'react';
import Business from './Business.jsx';
import './Business.css';

function BusinessList(props) {
    return (
        <div className="BusinessList">
            {props.businesses.map((business, index) => {
                return (
                <Business 
                key={index}
                imageSrc={business.image_url}
                name={business.name}
                address={business.location.display_address.join(", ")}
                city={business.city}
                postcode={business.postcode}
                category={business.category}
                rating={business.rating}
                reviewCount={business.review_count}
                />
                )
            })}
        </div>
    );
}

export default BusinessList;
