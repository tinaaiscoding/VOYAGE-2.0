import { useCallback, useContext, useEffect, useState } from 'react';
import { DestinationContext } from '../../DestinationContext';

import Countries from './Countries.js';
import States from './States.js';
import Cities from './Cities.js';
import DateSelector from './DateSelector.js';

import fetchCountries from '../../../../services/countriesAPI';
import fetchStates from '../../../../services/statesAPI';
import fetchCities from '../../../../services/citiesAPI';

// import { getGeoLocation } from '../../../../db/fetchWeather.js';

import './AddDestinationForm.scss';

const AddDestinationForm = (props) => {
  console.log('hello');
  const {
    destinationList,
    setDestinationList,
    countryList,
    setCountryList,
    stateList,
    setStateList,
    setCityList,
  } = useContext(DestinationContext);

  const [countryCode, setCountryCode] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [destinationData, setDestinationData] = useState({
    country: '',
    state: '',
    city: '',
    dateFrom: '',
    dateTo: '',
  });

  useEffect(() => {
    const getCountries = async () => {
      const countries = await fetchCountries();
      setCountryList(countries);
    };

    getCountries();
  }, [setCountryList]);

  useEffect(() => {
    const getStates = async () => {
      const states = await fetchStates(countryCode);
      setStateList(states);
    };

    if (countryCode) {
      getStates();
    }
  }, [countryCode, setStateList]);

  useEffect(() => {
    const getCities = async () => {
      const cities = await fetchCities(countryCode, stateCode);
      setCityList(cities);
    };

    if (countryCode && stateCode) {
      getCities();
    }
  }, [countryCode, stateCode, setCityList]);

  useEffect(() => {
    countryList.forEach((countryItem) => {
      if (countryItem.name === destinationData.country) {
        setCountryCode(countryItem.iso2);
      }
    });
  }, [destinationData.country]);

  console.log(destinationData);

  useEffect(() => {
    stateList.forEach((stateItem) => {
      if (stateItem.name === destinationData.state) {
        setStateCode(stateItem.iso2);
      }
    });
  }, [destinationData.state]);

  const changeHandler = (event) => {
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

    // TO DO: Reset these list of render
    setStateList([]);
    setCityList([]);
  };

  return (
    <div id="AddDestinationForm" className="add-destination-card">
      <form className="Add-Destination-Form" onSubmit={submitHandler}>
        <p>SELECT YOUR DESTINATION</p>
        <Countries
          changeHandler={changeHandler}
        />
        <States changeHandler={changeHandler} countryCode={countryCode} />
        <Cities
          changeHandler={changeHandler}
          countryCode={countryCode}
          stateCode={stateCode}
        />
        <DateSelector
          changeHandler={changeHandler}
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
