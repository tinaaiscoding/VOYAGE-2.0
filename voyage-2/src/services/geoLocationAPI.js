async function geoLocation(city) {
  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=a33a12b5491642ba990f1d8907ae6f5e`
  );
  const data = await res.json();
  const geoLocation = data.results[0].geometry;

  return geoLocation;
}

export { geoLocation };