const fetchStates = async (countryCode) => {
  var headers = new Headers();
  headers.append(
    'X-CSCAPI-KEY',
    'SkpFbGZOaFhBTTZINnpTWU15TzdSYk5FMHZaMFVjVU5PMng2UHNIdw=='
  );

  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
   };

  const res = await fetch(
    `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
    requestOptions
  );
  const statesList = await res.json();
  
  return statesList;
};

export default fetchStates