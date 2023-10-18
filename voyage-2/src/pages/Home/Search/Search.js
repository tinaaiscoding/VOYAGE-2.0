import React from 'react';
import GeoapifyAutocomplete from '../../../components/GeoapifyAutocomplete/GeoapifyAutocomplete';
import './Search.scss';

const Search = () => {
  const handlePlaceSelect = (value) => {
    console.log('Search section: ', value);
  };

  return (
    <div id="Search">
      <h1>NOT SURE?</h1>

      <form action="">
        <GeoapifyAutocomplete onPlaceSelect={handlePlaceSelect} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
