import React, { useState, useEffect } from 'react';
import Forecast from './Forecast';
import DailyForecast from './DailyForecast';
import tempfeels from '../images/thermometer.svg';
import windSpeed from '../images/wind.svg';
import humid from '../images/humidity.svg';
import drop from '../images/droplet.svg';

const CityWeather = ({ locationQuery }) => {
    const apiKey = 'b4e73de6e1421ab41c4a09a620b06296';
    const [city, setCity] = useState('');
    const [weatherDescription, setWeatherDescription] = useState('');
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');
    const [pressure, setPressure] = useState('')
    const [wind, setWind] = useState('');
    const [feelslike, setFeelsLike] = useState('');
    const [currentIcon, setCurrentIcon] = useState('')

    const [forecastData, setForecastData] = useState([]);

    const [dailyForecast, setDailyForecast] = useState([]);

    useEffect(() => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationQuery}&appid=${apiKey}&units=metric`;
    
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
    
                const cityName = data.name;
                const currentWeather = data.weather[0].description;
                const currentTemperature = Math.round(data.main.temp);
                const currentWind = data.wind.speed;
                const temperatureFeels = Math.round(data.main.feels_like);
                const currentHumidity = data.main.humidity;
                const currentPressure = data.main.pressure;
                const currentIconSelect = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                
    
                setCity(cityName);
                setWeatherDescription(currentWeather);
                setTemperature(currentTemperature);
                setWind(currentWind);
                setFeelsLike(temperatureFeels);
                setHumidity(currentHumidity);
                setPressure(currentPressure)
                setCurrentIcon(currentIconSelect);
    
                // Map weather descriptions to corresponding icons
                // const weatherIcons = {
                //     'Rain': rain,
                //     'Thunderstorm': thunder,
                //     'Sunny': sun,
                //     'Clear': moon,
                //     'Smoke': smoke, 
                //     'Haze': haze,
                //     'Clouds': cloud,
                //     'Clear sky': moon, 
                //     'Windy': windy, 
                //     'Storm': storm,
                //     'Light rain': lightRain, 
                //     'snow storm' : snow
                // };
                
                // Function to determine the icon based on the weather description
                //const getIcon = (weatherData) => {
                    //if (weatherData.length > 0) {
                        //const description = weatherData[0].description.toLowerCase();
                        //for (const key in weatherIcons) {
                            //if (description.includes(key.toLowerCase())) {
                                //return weatherIcons[key];
                            //}
                        //}
                    //}
                    //return sun; 
                //};
                
                //setIcon(getIcon(data.weather));
                
                
                
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [locationQuery]);

    

    useEffect(() => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${locationQuery}&appid=${apiKey}&units=metric`;
      
        fetch(apiUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            return response.json();
          })
          .then(data => {
            console.log(data);
      
            // Filter the data to get the next 8 items (24-hour forecast)
            const next24HoursData = data.list.slice(0, 8).map(item => ({
              temperature: Math.round(item.main.temp),
              icon: item.weather[0].icon, // Weather icon code
              weekday: new Date(item.dt * 1000).toLocaleString('en-US', { weekday: 'long' }), // Weekday name
              time: new Date(item.dt * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }), // Time
            }));
      
            setForecastData(next24HoursData);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, [locationQuery]);


    useEffect(() => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${locationQuery}&appid=${apiKey}&units=metric`;
  
      fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "200") {
        // Group the data by day of the week
        const dailyData = data.list.reduce((result, forecast) => {
          const date = new Date(forecast.dt_txt);
          const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
          
          if (!result[weekday]) {
            result[weekday] = forecast;
          }
          return result;
        }, {});

        // Convert the object back to an array
        const dailyForecastArray = Object.values(dailyData);

        setDailyForecast(dailyForecastArray);
      } else {
        console.error("API error: ", data.message);
      }
    })
        .catch((error) => {
          console.error("Error fetching data:", error);
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
                        src={currentIcon}
                        alt="weather icon"
                    />
                </div>
            </div>
            <div className="container mt-5">
                <div className="card p-4" style={{ backgroundColor: 'rgb(159, 179, 194)' }}>
                    <div className="row no-gutters">
                        <div className="col-md-12">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="card-text"><img src={humid} alt="pressure" /> Pressure: {pressure} hPa</p>
                                        <p className="card-text"><img src={drop} alt="humidity" /> Humidity: {humidity} %</p>
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
            <div>
            
            <Forecast data={forecastData}/>
            <DailyForecast data={dailyForecast} />
      
            </div>
            
        </>
    );
};

export default CityWeather;
