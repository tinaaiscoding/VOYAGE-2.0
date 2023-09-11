import { useContext, useState } from 'react';
import { DestinationContext } from '../Home/DestinationContext';

import { getGeoLocation, getWeather } from '../../services/weatherAPI';
import AvgWeather from './AvgWeather';
import ItineraryDesList from './ItineraryDesList';

import './Itinerary.scss';

const Itinerary = (props) => {
  const { destinationList, setDestinationList } =
    useContext(DestinationContext);
  const [citySelected, setCitySelected] = useState({});
  const [cityPrevWeatherData, setCityPrevWeatherData] = useState([]);
  const [displayEditModal, setDisplayEditModal] = useState(false);

  const fetchWeatherDataHandler = (event) => {
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

  const deleteCityHandler = (indexOfCity) => {
    const remainingCities = destinationList.filter(
      (city, i) => i !== indexOfCity
    );

    setDestinationList(remainingCities);
  };

  const renderEditModalHandler = (indexOfCity) => {
    setCitySelected((prevState) => {
      return {
        ...prevState,
        index: indexOfCity,
      };
    });
    setDisplayEditModal(true);
  };

  const closeEditModalHandler = () => {
    setDisplayEditModal(false);
  };

  return (
    <div className="Itinerary itinerary-grid">
      <div className="itinerary-header">
        <h1>ITINERARY</h1>
      </div>
      <div className="itinerary-destination-list itinerary-card">
        <ItineraryDesList
          renderEditModalHandler={renderEditModalHandler}
          deleteCityHandler={deleteCityHandler}
          displayEditModal={displayEditModal}
          citySelected={citySelected}
          closeEditModalHandler={closeEditModalHandler}
          fetchWeatherDataHandler={fetchWeatherDataHandler}
        />
      </div>

      <div className="weather-info itinerary-card">
        <AvgWeather
          cityPrevWeatherData={cityPrevWeatherData}
          citySelected={citySelected}
        />
      </div>
    </div>
  );
};

export default Itinerary;
