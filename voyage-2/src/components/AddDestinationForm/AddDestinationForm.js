import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DestinationContext } from '../../pages/Home/DestinationContext';

import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import DateSelector from './DateSelector.js';

import './AddDestinationForm.scss';

const AddDestinationForm = () => {
  const { destinationList, setDestinationList, setStateList, setCityList } =
    useContext(DestinationContext);

  const navigate = useNavigate();
  const [destinationData, setDestinationData] = useState({
    country: '',
    state: '',
    city: '',
    dateFrom: '',
    dateTo: '',
  });

  function onPlaceSelect(value) {
    setDestinationData((prevState) => {
      return {
        ...prevState,
        country: value.properties.country,
        state: value.properties.state,
        city: value.properties.city,
      };
    });
  }

  const handleDateChange = (event) => {
    setDestinationData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setDestinationList([...destinationList, destinationData]);

    setDestinationData({
      country: '',
      state: '',
      city: '',
      dateFrom: '',
      dateTo: '',
    });

    navigate('/itinerary');
  };

  return (
    <div id="AddDestinationForm" className="add-destination-card">
      <form className="Add-Destination-Form" onSubmit={submitHandler}>
        <p>SELECT YOUR DESTINATION</p>
        <GeoapifyContext apiKey={process.env.REACT_APP_GEOAPIFY_KEY}>
          <GeoapifyGeocoderAutocomplete
            placeholder="Enter city here"
            type="city"
            lang="en"
            limit={5}
            placeSelect={onPlaceSelect}
          />
        </GeoapifyContext>

        <DateSelector
          handleDateChange={handleDateChange}
          destinationData={destinationData}
        />

        <button className="button-80" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddDestinationForm;
