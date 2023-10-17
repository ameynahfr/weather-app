import React, { useState } from 'react';
import CityWeather from './components/CityWeather';
import Navbar from './components/Navbar';
import './App.css'; 

function App() {
  const [locationQuery, setLocationQuery] = useState('');

  const handleLocationQueryChange = (query) => {
    setLocationQuery(query);
  };

  return (
    <>
      <Navbar onLocationQueryChange={handleLocationQueryChange} />
      <CityWeather locationQuery={locationQuery} />
    </>
  );
}

export default App;
