import React from 'react'
import ReactDOM from 'react-dom'
import { Business, BusinessList } from './Business'
import SearchBar from './Search';

function App() {
  return (
  <div>
  <SearchBar />
  <BusinessList />
  </div>
  );
}

export default App;