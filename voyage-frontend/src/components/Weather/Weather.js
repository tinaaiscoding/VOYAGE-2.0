import React from 'react';
import './Weather.scss';

const Weather = ({ cityPrevWeatherData, citySelected }) => {
  return (
    <div className="content">
      {cityPrevWeatherData.length > 0 ? (
        <>
          <h4>
            {citySelected.city}, {citySelected.state}, {citySelected.country}
          </h4>
          <span className="last-year-avg-temp">
            {(
              cityPrevWeatherData.reduce((a, b) => a + b, 0) /
              cityPrevWeatherData.length
            ).toFixed(2)}{' '}
            °C
          </span>
          <h4>Average weather from</h4>
          <h4>
            {citySelected.dateFrom} - {citySelected.dateTo}
          </h4>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
