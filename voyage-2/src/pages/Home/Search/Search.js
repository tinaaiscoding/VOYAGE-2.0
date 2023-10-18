import React from 'react';
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import './Search.scss';

const Search = () => {
  const handlePlaceSelect = (value) => {
    console.log('Search section: ', value)
  }

  return (
    <div id="Search">
      <h1>NOT SURE?</h1>

      <form action="">
        <GeoapifyContext apiKey={process.env.REACT_APP_GEOAPIFY_KEY}>
          <GeoapifyGeocoderAutocomplete
            placeholder="Enter city here"
            type="city"
            lang="en"
            limit={5}
            placeSelect={handlePlaceSelect}
          />
        </GeoapifyContext>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
