import React, { useState, useEffect } from 'react';
import SearchBar from './Search';
import BusinessList from './BusinessList';
import getBusiness from './utils/YelpAPI';

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
