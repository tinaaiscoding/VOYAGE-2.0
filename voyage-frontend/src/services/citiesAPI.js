const fetchCities = async (countryCode, stateCode) => {
  var headers = new Headers();
  headers.append(
    'X-CSCAPI-KEY',
    'SkpFbGZOaFhBTTZINnpTWU15TzdSYk5FMHZaMFVjVU5PMng2UHNIdw=='
  );

  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow',
  };

  const res = await fetch(
    `https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`,
    requestOptions
  );
  const citiesList = await res.json();

  return citiesList;
};

export default fetchCities;
