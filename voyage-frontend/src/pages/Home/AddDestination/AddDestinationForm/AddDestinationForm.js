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
      season: [],
    });
  };

  return (
    <div id="AddDestinationForm" className="add-destination-card">
      <form className="Add-Destination-Form" onSubmit={submitHandler}>
        <p>SELECT YOUR DESTINATION</p>
        <Countries onSelectedCountry={countryChangeHandler} />
        <States
          onSelectState={stateChangeHandler}
          countryCode={countryCode}
        />

        <Cities
          changeHandler={changeHandler}
          countryCode={countryCode}
          stateCode={stateCode}
        />

        <DateSelector
          changeHandler={changeHandler}
        />

        <button className="button-80" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddDestinationForm;
