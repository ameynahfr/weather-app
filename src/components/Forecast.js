import React from "react";

const Forecast = ({ data }) => {
  return (
    <div>
      <h1 className="mt-5" style={{ textAlign: "center", fontWeight: 700 }}>
        TODAY'S FORECAST
      </h1>
      <div className="container mt-5" style={{ overflowX: 'auto' }}>
        <div
          className="card-group"
          style={{
            fontWeight : 900,
            textAlign: "center",
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          {data.map((item, index) => (
            <div
              className="card"
              style={{
                alignItems: "center",
                backgroundColor: 'rgb(159, 179, 194)',
                minWidth: '150px',
                margin: 10,
                borderRadius: '10px',
                boxShadow: '3px 4px rgb(102, 113, 122)',
                marginLeft: 20, // Add margin to the last card
              }}
              key={index}
            >
              <div className="card-body">
                <p className="card-text">{item.weekday}</p>
                <p className="card-text">{item.time}</p>
                <img
                  className="card-image"
                  src={`https://openweathermap.org/img/w/${item.icon}.png`}
                  alt="Weather Icon"
                />
                <p className="card-text">{item.temperature} °C</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forecast;
