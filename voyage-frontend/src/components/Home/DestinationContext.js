import React, { useState } from 'react';

export const DestinationContext = React.createContext();

export const DestinationContextProvider = ({ children }) => {
  const [destinationData, setDestinationData] = useState({
    country: '',
    state: '',
    city: '',
    dateFrom: '',
    dateTo: '',
  });
  const [destinationList, setDestinationList] = useState([]);

  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  return (
    <DestinationContext.Provider
      value={{
        destinationData,
        setDestinationData,
        destinationList,
        setDestinationList,
        countryList,
        setCountryList,
        stateList,
        setStateList,
        cityList,
        setCityList
      }}
    >
      {children}
    </DestinationContext.Provider>
  );
};
