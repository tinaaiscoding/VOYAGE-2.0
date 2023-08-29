import { useEffect } from 'react';

import fetchCities from '../../../db/fetchCities';

const Cities = (props) => {
  useEffect(() => {
    fetchCities(props.countryCode, props.stateCode).then((res) => {
      props.setEditCityList(res);
    });
  }, [props.stateCode]);
  console.log(props.editCityList);
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
      >
        {props.editCityList.length > 0 &&
          props.editCityList.map((city, index) => {
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
