import React from 'react';
import './Search.css';

const sortOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
};

function SearchBar({ onSortChange }) {
    const [businessTerm, setBusinessTerm] = React.useState('');
    const [locationTerm, setLocationTerm] = React.useState('');
    const [activeSort, setActiveSort] = React.useState('best_match')

    function handleSortChange(apiValue) {
        setActiveSort(apiValue);
        onSortChange(apiValue);
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
                    onChange={e => setBusinessTerm(e.target.value)}
                    />
                    <input 
                    className="Search-location" 
                    value={locationTerm}
                    type="text"
                    placeholder='Where?'
                    onChange={e => setLocationTerm(e.target.value)}
                    />
                </div>
                <div className="Search-button">
                    <button>Search</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;