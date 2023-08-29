import { useEffect } from 'react';
import fetchCities from '../../../../db/fetchCities';

import './AddDestinationForm.scss'

const Cities = (props) => {
  useEffect(() => {
    fetchCities(props.selectedCountryCode, props.selectedStateCode).then(
      (res) => {
        props.setCityList(res);
      }
    );
  }, [props.selectedStateCode]);

  const storeCityHandler = (event) => {
    const citySelected = event.target.value;

    props.onSelectCity(citySelected);
  };

  return (
    <div className="Cities">
      <select
        name="cities"
        form="Add-Destination-Form"
        onChange={storeCityHandler}
        value={props.selectedCity}
        required
      >
        <option value="" disabled hidden>
          City
        </option>
        {props.cityList.length > 0 &&
          props.cityList.map((city, index) => {
            return (
              <option key={index} value={city.name}>
                {city.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Cities;
