import { useEffect } from 'react';

import fetchCities from '../../services/citiesAPI';

const Cities = (props) => {
  useEffect(() => {
    fetchCities(props.countryCode, props.stateCode).then((res) => {
      props.setEditCityList(res);
    });
  }, [props.stateCode]);

  return (
    <div className="Cities">
      <select
        name="city"
        form="Edit-Form"
        onChange={props.changeHandler}
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
