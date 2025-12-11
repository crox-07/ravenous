import React from 'react';
import './Business.css';

export function Business(props) {
    return (
        <div className='Business'>
            <div className='Business-image'>
                <img src={props.imageSrc}/>
            </div>
            <h2>{props.name}</h2>
            <div className='Business-content'>
                <div className='Business-information'>
                    <p>{props.address}</p>
                    <p>{props.city}</p>
                    <p>{props.postcode}</p>
                </div>
                <div className='Business-reviews'>
                    <p className='category'>{props.category}</p>
                    <p className='rating'>{props.rating} stars</p>
                    <p className='review-count'>{props.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    );
}

export default Business;
