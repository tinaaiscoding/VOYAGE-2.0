import React, { useState } from 'react';

export const DestinationContext = React.createContext();

export const DestinationContextProvider = ({ children }) => {
  const [destinationList, setDestinationList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  return (
    <DestinationContext.Provider
      value={{
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
