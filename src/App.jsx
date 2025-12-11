import React, { useState, useEffect } from 'react';
import SearchBar from './Search';
import BusinessList from './BusinessList';
import getBusiness from './utils/YelpAPI';

// const businesses = [
//     {
//     imageSrc: "https://www.honestburgers.co.uk/wp-content/uploads/2024/01/triple_014-1.jpg",
//     name: 'Honest Burgers South Kensington',
//     address: '24 Thurloe St',
//     city: 'London',
//     postcode: 'SW7 2LT',
//     category: 'Burgers',
//     rating: 4.6,
//     reviewCount: 75,
//     },
// ];




function App() {
  const [businesses, setBusinesses] = useState([])
  getBusiness('Honest Burgers', 'London', 'best_match').then(results => console.log(results));
  
  useEffect(() => {
    getBusiness("food", "London", "review_count").then(results => setBusinesses(results)).catch(err=> console.error(err));
  }, [])

  return (
  <div>
  <SearchBar setBusinesses={setBusinesses}/>
  <BusinessList businesses={businesses}/>
  </div>
  );
}

export default App;
