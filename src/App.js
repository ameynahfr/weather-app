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
    <div className="app-container">
      <Navbar onLocationQueryChange={handleLocationQueryChange} />
      {locationQuery ? (
        <>
          <CityWeather locationQuery={locationQuery} />
        <Footer/>
        </>

      ) : null}
    </div>
  );
}

export default App;
