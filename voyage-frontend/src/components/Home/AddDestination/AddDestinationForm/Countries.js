import { useEffect } from 'react';
import fetchCountries from '../../../../db/fetchCountries';

import './AddDestinationForm.scss'

const Countries = (props) => {
  useEffect(() => {
    fetchCountries().then((res) => {
      props.setCountryList(res);
    });
  }, []);

  const storeCountryHandler = (event) => {
    const countrySelected = event.target.value;

    props.onSelectedCountry(countrySelected);
  };

  return (
    <div className="Countries">
      <select
        name="countries"
        form="Add-Destination-Form"
        onChange={storeCountryHandler}
        value={props.selectedCountry}
        required
      >
        <option value="" disabled hidden>
          Country
        </option>
        {props.countryList.map((country, index) => {
          return (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Countries;
