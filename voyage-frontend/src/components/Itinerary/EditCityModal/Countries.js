import { useContext } from 'react';
import { DestinationContext } from '../../Home/DestinationContext';

const Countries = (props) => {
  const { countryList } = useContext(DestinationContext);

  const storeCountryHandler = (event) => {
    const countrySelected = event.target.value;

    props.onSelectedCountry(countrySelected);
  };

  return (
    <div className="Countries">
      <select
        name="countries"
        form="Edit-Form"
        onChange={storeCountryHandler}
        value={props.selectedCountry}
      >
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
