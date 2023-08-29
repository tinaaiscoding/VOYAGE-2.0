import { useContext, useState } from 'react';
import { DestinationContext } from '../../DestinationContext';

import Countries from './Countries.js';
import States from './States.js';
import Cities from './Cities.js';
import DateSelector from './DateSelector.js';

// import { getGeoLocation } from '../../../../db/fetchWeather.js';

import './AddDestinationForm.scss';

const AddDestinationForm = (props) => {
  const {
    destinationData,
    setDestinationData,
    destinationList,
    setDestinationList,
    countryList,
    stateList,
  } = useContext(DestinationContext);
  const [countryCode, setCountryCode] = useState('');
  const [stateCode, setStateCode] = useState('');

  const countryChangeHandler = (country) => {
    setDestinationData((prevState) => {
      return {
        ...prevState,
        country: country,
      };
    });

    countryList.forEach((countryItem) => {
      if (countryItem.name === country) {
        setCountryCode(countryItem.iso2);
      }
    });
  };

  const stateChangeHandler = (state) => {
    setDestinationData((prevState) => {
      return {
        ...prevState,
        state: state,
      };
    });

    stateList.forEach((stateItem) => {
      if (stateItem.name === state) {
        setStateCode(stateItem.iso2);
      }
    });
  };

  const cityChangeHandler = (city) => {
    setDestinationData((prevState) => {
      return {
        ...prevState,
        city: city,
      };
    });
  };

  const dateFromChangeHandler = (event) => {
    setDestinationData((prevState) => {
      return {
        ...prevState,
        dateFrom: event.target.value,
      };
    });
  };

  const dateToChangeHandler = (event) => {
    setDestinationData((prevState) => {
      return {
        ...prevState,
        dateTo: event.target.value,
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
      season: [],
    });
  };

  return (
    <div className="Add-Destination-Form add-destination-card">
      <form className="Add-Destination-Form" onSubmit={submitHandler}>
        <p>SELECT YOUR DESTINATION</p>
        <Countries onSelectedCountry={countryChangeHandler} />
        <States
          onSelectState={stateChangeHandler}
          selectedCountryCode={countryCode}
        />

        <Cities
          onSelectCity={cityChangeHandler}
          selectedCountryCode={countryCode}
          selectedStateCode={stateCode}
        />

        <DateSelector
          onDateFromChange={dateFromChangeHandler}
          onDateToChange={dateToChangeHandler}
        />

        <button className="button-80" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddDestinationForm;
