import React, { useState, useEffect } from 'react';
import sun from '../images/sun.png';
import cloud from '../images/cloud.png';
import storm from '../images/snowstorm.png';
import thunder from '../images/thunder.png';
import rain from '../images/rainy.png';
import lightRain from '../images/lightrain.png';
import windy from '../images/wind.png';
import smoke from '../images/smoke.png';
import haze from '../images/haze.png';
import moon from '../images/moon.png';
import snow from '../images/snowstorm.png'
import tempfeels from '../images/thermometer.svg';
import windSpeed from '../images/wind.svg';
import rainchance from '../images/droplet.svg';
import humid from '../images/humidity.svg'

const CityWeather = ({ locationQuery }) => {
    const apiKey = 'b4e73de6e1421ab41c4a09a620b06296';
    const [city, setCity] = useState('Islamabad');
    const [weatherDescription, setWeatherDescription] = useState('Cloudy');
    const [temperature, setTemperature] = useState('20');
    const [rainProbability, setRainProbability] = useState('30%');
    const [humidity, setHumidity] = useState('2');
    const [wind, setWind] = useState('50');
    const [feelslike, setFeelsLike] = useState('17');
    const [icon, setIcon] = useState(cloud);

    useEffect(() => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationQuery}&appid=${apiKey}&units=metric`;
    
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
    
                const cityName = data.name;
                const currentWeather = data.weather[0].description;
                const currentTemperature = data.main.temp;
                const precipProbability = data.weather[0].main === 'Rain' ? '100%' : '0%'; // Adjust this as needed
                const currentWind = data.wind.speed;
                const temperatureFeels = data.main.feels_like;
                const currentHumidity = data.main.humidity
    
                setCity(cityName);
                setWeatherDescription(currentWeather);
                setTemperature(currentTemperature);
                setRainProbability(precipProbability);
                setWind(currentWind);
                setFeelsLike(temperatureFeels);
                setHumidity(currentHumidity)
    
                // Map weather descriptions to corresponding icons
                const weatherIcons = {
                    'Rain': rain,
                    'Thunderstorm': thunder,
                    'Sunny': sun,
                    'Clear': moon,
                    'Smoke': smoke, 
                    'Haze': haze,
                    'Clouds': cloud,
                    'Clear sky': moon, 
                    'Windy': windy, 
                    'Storm': storm,
                    'Light rain': lightRain, 
                    'snow storm' : snow
                };
                
                // Function to determine the icon based on the weather description
                const getIcon = (weatherData) => {
                    if (weatherData.length > 0) {
                        const description = weatherData[0].description.toLowerCase();
                        for (const key in weatherIcons) {
                            if (description.includes(key.toLowerCase())) {
                                return weatherIcons[key];
                            }
                        }
                    }
                    return sun; 
                };
                
                setIcon(getIcon(data.weather));
                
                
                
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [locationQuery]);
    
    

  
    return (
        <>
            <div className="city-weather">
                <div className="city">
                    <p>{city}</p>
                    <h6 style={{ fontWeight: "400", marginTop: "-20px" }}>Current Weather: {weatherDescription}</h6>
                    <p style={{ marginTop: '20px' }} className="card-text">{temperature} °C</p>
                </div>
                <div className="city-image">
                    <img
                        src={icon}
                        alt="weather icon"
                    />
                </div>
            </div>
            <div className="container mt-5" style={{ maxWidth: '800px' }}>
                <div className="card p-4" style={{ backgroundColor: 'rgb(159, 179, 194)' }}>
                    <div className="row no-gutters">
                        <div className="col-md-12">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="card-text"><img src={rainchance} alt="rain chance" /> Chances of Rain: {rainProbability}</p>
                                        <p className="card-text"><img src={humid} alt="humidity" /> Humidity: {humidity}%</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="card-text"><img src={windSpeed} alt="wind speed" /> Wind Speed: {wind} km/h</p>
                                        <p className="card-text"><img src={tempfeels} alt="feels like" /> Feels like: {feelslike} °C</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CityWeather;
