import React from 'react'
import ReactDOM from 'react-dom'
import { Business, BusinessList } from './Business'
import SearchBar from './Search';

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

function App() {
  return (
  <div>
  <SearchBar />
  <BusinessList businesses={businesses}/>
  </div>
  );
}

export default App;