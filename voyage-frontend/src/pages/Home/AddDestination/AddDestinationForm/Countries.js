import { useContext, useEffect } from 'react';
import { DestinationContext } from '../../DestinationContext';

import fetchCountries from '../../../../services/countriesAPI';

import './AddDestinationForm.scss';

const Countries = (props) => {
  const { destinationData, countryList, setCountryList } =
    useContext(DestinationContext);

  useEffect(() => {
    fetchCountries().then((res) => {
      setCountryList(res);
    });
  }, []);

  const storeCountryHandler = (event) => {
    const countrySelected = event.target.value;

    props.onSelectedCountry(countrySelected);
  };

  return (
    <div className="Countries">
      <select
        name="country"
        form="Add-Destination-Form"
        onChange={storeCountryHandler}
        value={destinationData.country}
        required
      >
        <option value="" disabled hidden>
          Country
        </option>
        {countryList.map((country, index) => {
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
