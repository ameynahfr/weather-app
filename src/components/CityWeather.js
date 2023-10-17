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
import uv from '../images/sun.svg';

const CityWeather = ({ locationQuery }) => {
    const apiKey = 'b25e13bec6a8b7277bccd0d19b837736';
    const [city, setCity] = useState('Islamabad');
    const [weatherDescription, setWeatherDescription] = useState('Cloudy');
    const [temperature, setTemperature] = useState('20');
    const [rainProbability, setRainProbability] = useState('30%');
    const [uvIndex, setUvIndex] = useState('2');
    const [wind, setWind] = useState('50');
    const [feelslike, setFeelsLike] = useState('17');
    const [icon, setIcon] = useState(cloud);

    useEffect(() => {
        
        const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${locationQuery}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const cityName = data.location.name;
                const currentWeather = data.current.weather_descriptions[0];
                const currentTemperature = data.current.temperature;
                const precipProbability = (data.current.precip * 100).toFixed(0) + '%';
                const uv = data.current.uv_index;
                const currentWind = data.current.wind_speed;
                const temperatureFeels = data.current.feelslike;

                setCity(cityName);
                setWeatherDescription(currentWeather);
                setTemperature(currentTemperature);
                setRainProbability(precipProbability);
                setUvIndex(uv);
                setWind(currentWind);
                setFeelsLike(temperatureFeels);

                // Map weather descriptions to corresponding icons
                const weatherIcons = {
                    'rain': rain,
                    'thunder': thunder,
                    'sunny': sun,
                    'storm': storm,
                    'light rain': lightRain,
                    'cloudy': cloud,
                    'windy': windy,
                    'smoke': smoke,
                    'haze': haze,
                    'snow' : snow,
                    'clear': moon
                };

                // Function to determine the icon based on keywords in the weather description
                const getIcon = (weatherDescription) => {
                    for (const keyword in weatherIcons) {
                        if (weatherDescription.toLowerCase().includes(keyword)) {
                            return weatherIcons[keyword];
                        }
                    }
                    return sun;
                };

                setIcon(getIcon(currentWeather));
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
                                        <p className="card-text"><img src={uv} alt="uv index" /> UV Index: {uvIndex}</p>
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
