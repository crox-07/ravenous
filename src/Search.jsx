import React, { useState } from 'react';
import './Search.css';
import getBusiness from './utils/YelpAPI';

const sortOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
};

function SearchBar({setBusinesses}) {
    const [businessTerm, setBusinessTerm] = useState('');
    const [locationTerm, setLocationTerm] = useState('');
    const [activeSort, setActiveSort] = useState('best_match')

    function handleSortChange(apiValue) {
        setActiveSort(apiValue);
        //onSortChange(apiValue);
    }
    function handleBusinessChange(event) {
        setBusinessTerm(event.target.value);
    }
    function handleLocationChange(event) {
        setLocationTerm(event.target.value);
    }
    function handleSearch() {
        getBusiness(businessTerm, locationTerm, activeSort).then(result => { 
            setBusinesses(result);
            console.log(`Result properties: ${Object.keys(result[0])}`);
        });
    }
    
    return (
        <div className="Search">
            <div className='Search-content'>
                <div className="Search-filters">
                    {Object.entries(sortOptions).map(([label, apiValue]) => (
                        <button
                        key={apiValue}
                        className={activeSort === apiValue ? 'active' : ''}
                        onClick={() => handleSortChange(apiValue)}>
                            {label}
                        </button>
                    ))}
                </div>
                <div className="Search-bar">
                    <input 
                    className="Search-business" 
                    value={businessTerm}
                    type="text"
                    placeholder="Search businesses"
                    onChange={handleBusinessChange}
                    />
                    <input 
                    className="Search-location" 
                    value={locationTerm}
                    type="text"
                    placeholder='Where?'
                    onChange={handleLocationChange}
                    />
                </div>
                <div className="Search-button">
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;