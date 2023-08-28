import { useState, useEffect } from 'react';

import Countries from './Countries.js';
import States from './States.js';
import Cities from './Cities.js';
import DateSelector from './DateSelector.js';
import SeasonFilter from './SeasonFilter.js';

import { getGeoLocation } from '../../../db/fetchWeather.js';

import './AddDestinationForm.scss';

const AddDestinationForm = (props) => {
  const [countryCode, setCountryCode] = useState('');
  const [stateCode, setStateCode] = useState('');

  const countryChangeHandler = (country) => {
    props.setDestinationData((prevState) => {
      return {
        ...prevState,
        country: country,
      };
    });

    props.countryList.forEach((countryItem) => {
      if (countryItem.name === country) {
        setCountryCode(countryItem.iso2);
      }
    });
  };

  const stateChangeHandler = (state) => {
    props.setDestinationData((prevState) => {
      return {
        ...prevState,
        state: state,
      };
    });

    props.stateList.forEach((stateItem) => {
      if (stateItem.name === state) {
        setStateCode(stateItem.iso2);
      }
    });
  };

  const cityChangeHandler = (city) => {
    props.setDestinationData((prevState) => {
      return {
        ...prevState,
        city: city,
      };
    });
  };

  const dateFromChangeHandler = (event) => {
    props.setDestinationData((prevState) => {
      return {
        ...prevState,
        dateFrom: event.target.value,
      };
    });
  };

  const dateToChangeHandler = (event) => {
    props.setDestinationData((prevState) => {
      return {
        ...prevState,
        dateTo: event.target.value,
      };
    });
  };

  const seasonChangeHandler = (event) => {
    props.setDestinationData((prevState) => {
      if (event.target.checked) {
        return {
          ...prevState,
          season: [...props.destinationData.season, event.target.value],
        };
      } else {
        const selectedSeason = props.destinationData.season.filter((season) => {
          return season !== event.target.value;
        });
        return {
          ...prevState,
          season: selectedSeason,
        };
      }
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.setDestinationList([...props.destinationList, props.destinationData]);

    props.setDestinationData({
      country: '',
      state: '',
      city: '',
      dateFrom: '',
      dateTo: '',
      season: [],
    });

    props.setMarkerInfo({ markerOffset: -8, name: '', coordinates: [] });

    if (
      props.destinationData.country === '' && props.destinationData.state === '' &&
      props.destinationData.city === ''
    ) {
      console.log('No data to add to marker list');
    } else {
      props.setMarkerList([...props.markerList, props.markerInfo]);
    }
  };

  useEffect(() => {
    async function getCoordinates() {
      const geoLocation = await getGeoLocation(props.destinationData.city);
      props.setMarkerInfo((prevState) => {
        return {
          ...prevState,
          name: props.destinationData.city,
          coordinates: [geoLocation.lng, geoLocation.lat],
        };
      });
    }

    getCoordinates();
  }, [props.destinationData]);


  return (
    <div className="Add-Destination-Form add-destination-card">
      <form className="Add-Destination-Form" onSubmit={submitHandler}>
        <p>SELECT YOUR DESTINATION</p>
        <Countries
          onSelectedCountry={countryChangeHandler}
          selectedCountry={props.destinationData.country}
          countryList={props.countryList}
          setCountryList={props.setCountryList}
        />
        <States
          onSelectState={stateChangeHandler}
          selectedState={props.destinationData.state}
          selectedCountryCode={countryCode}
          setCountryList={props.setCountryList}
          stateList={props.stateList}
          setStateList={props.setStateList}
        />

        <Cities
          onSelectCity={cityChangeHandler}
          selectedCity={props.destinationData.city}
          selectedCountryCode={countryCode}
          selectedStateCode={stateCode}
          cityList={props.cityList}
          setCityList={props.setCityList}
        />

        <DateSelector
          onDateFromChange={dateFromChangeHandler}
          onDateToChange={dateToChangeHandler}
          destinationData={props.destinationData}
          setDestinationData={props.setDestinationData}
        />
        <SeasonFilter onFilterToggle={seasonChangeHandler} />

        <button className="button-80" type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddDestinationForm;
