const Countries = (props) => {
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
      >
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
