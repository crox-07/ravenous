import React from 'react';

function BusinessList(props) {
    return (
        <div className="BusinessList">
            {props.businesses.map((business, index) => {
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

export default BusinessList;