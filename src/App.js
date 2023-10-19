import React, { useState } from 'react';
import CityWeather from './components/CityWeather';
import Navbar from './components/Navbar';
import './App.css'; 
import Footer from './components/Footer';

function App() {
  const [locationQuery, setLocationQuery] = useState('');

  const handleLocationQueryChange = (query) => {
    setLocationQuery(query);
  };

  return (
    <>
      <Navbar onLocationQueryChange={handleLocationQueryChange} />
      <CityWeather locationQuery={locationQuery} />
      <Footer />
    </>
  );
}

export default App;
