import { useContext } from 'react';
import { DestinationContext } from '../../pages/Home/DestinationContext';

const Countries = (props) => {
  const { countryList } = useContext(DestinationContext);

  return (
    <div className="Countries">
      <select
        name="country"
        form="Edit-Form"
        onChange={props.changeHandler}
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
