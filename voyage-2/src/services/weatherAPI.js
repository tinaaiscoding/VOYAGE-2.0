async function getWeather(latitude, longitude, dateFrom, dateTo) {
  const res = await fetch(
    `https://archive-api.open-meteo.com/v1/archive?latitude=${latitude}&longitude=${longitude}&start_date=${dateFrom}&end_date=${dateTo}&daily=temperature_2m_mean,apparent_temperature_mean&timezone=Australia%2FSydney`
  );
  const data = await res.json();

  return data;
}

export { getWeather };
