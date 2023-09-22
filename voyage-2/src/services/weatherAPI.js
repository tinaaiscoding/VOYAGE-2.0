async function getGeoLocation(city) {
  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=a33a12b5491642ba990f1d8907ae6f5e`
  );
  const data = await res.json();
  const geoLocation = data.results[0].geometry;

  return geoLocation;
}

async function getWeather(latitude, longitude, dateFrom, dateTo) {
  const res = await fetch(
    `https://archive-api.open-meteo.com/v1/archive?latitude=${latitude}&longitude=${longitude}&start_date=${dateFrom}&end_date=${dateTo}&daily=temperature_2m_mean,apparent_temperature_mean&timezone=Australia%2FSydney`
  );
  const data = await res.json();

  return data;
}

export { getGeoLocation, getWeather };
