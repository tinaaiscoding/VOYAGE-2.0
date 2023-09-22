const fetchCountries = async () => {
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
    'https://api.countrystatecity.in/v1/countries',
    requestOptions
  );
  const countriesList = await res.json();

  return countriesList;
};

export default fetchCountries;
