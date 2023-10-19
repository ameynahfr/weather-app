import React from "react";

const DailyForecast = ({ data }) => {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const iconBaseUrl = "https://openweathermap.org/img/w/";

  // Get the current day of the week (0 for Sunday, 1 for Monday, and so on)
  const currentDayOfWeek = new Date().getDay();

  return (
    <>
      <h2 className="text-center mt-4">DAILY FORECAST</h2>
      <div className="container daily-forecast">
        {data.map((day, index) => (
          <div key={index} className="row week">
            <div className="col-2">
              <p className="text-center">
                {index === 0 ? "Today" : daysOfWeek[(currentDayOfWeek + index) % 7]}
              </p>
            </div>
            <div className="col-2">
              <img
                src={`${iconBaseUrl}${day.weather[0].icon}.png`}
                alt="Weather Icon"
                className="img-fluid d-block mx-auto"
                style={{ marginTop: -10 }}
              />
            </div>
            <div className="col-4">
              <p className="text-center">
                {day.weather[0].description}
              </p>
            </div>
            <div className="col-4">
              <p className="text-center">
                {Math.round(day.main.temp_max)}°C / {Math.round(day.main.temp_min)}°C
              </p>
            </div>
            <hr style={{ width: '95%', margin: '0 auto' }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default DailyForecast;
