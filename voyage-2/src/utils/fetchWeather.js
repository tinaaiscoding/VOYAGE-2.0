import { getGeoLocation, getWeather } from '../services/weatherAPI';

const fetchWeatherData = (event, setCityPrevWeatherData, setCitySelected) => {
  const location = event.target.textContent;
  const dateSpan = event.target.nextSibling;

  let dateFrom = dateSpan.children[0].textContent;
  let dateTo = dateSpan.children[1].textContent;

  dateFrom = dateFrom.split('-');
  dateFrom.splice(0, 1, Number(dateFrom[0]) - 1);
  dateFrom = dateFrom.join('-');

  dateTo = dateTo.split('-');
  dateTo.splice(0, 1, Number(dateTo[0]) - 1);
  dateTo = dateTo.join('-');

  getGeoLocation(location)
    .then((geoLocation) =>
      getWeather(geoLocation.lat, geoLocation.lng, dateFrom, dateTo)
    )
    .then((weatherData) =>
      setCityPrevWeatherData(weatherData.daily.temperature_2m_mean)
    );

  setCitySelected((prevState) => {
    return {
      ...prevState,
      city: location.split(', ')[0],
      state: location.split(', ')[1],
      country: location.split(', ')[2],
      dateFrom: dateFrom,
      dateTo: dateTo,
    };
  });
};

export { fetchWeatherData };