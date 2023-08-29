import { useContext, useEffect } from 'react';
import { DestinationContext } from '../../DestinationContext';

import fetchCities from '../../../../db/fetchCities';

import './AddDestinationForm.scss';

const Cities = (props) => {
  const { destinationData, cityList, setCityList } =
    useContext(DestinationContext);

  useEffect(() => {
    fetchCities(props.selectedCountryCode, props.selectedStateCode).then(
      (res) => {
        setCityList(res);
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
        value={destinationData.city}
        required
      >
        <option value="" disabled hidden>
          City
        </option>
        {cityList.length > 0 &&
          cityList.map((city, index) => {
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
