import React, { useState } from 'react';

export const DestinationContext = React.createContext();

export const DestinationContextProvider = ({ children }) => {
  const [destinationList, setDestinationList] = useState([]);

  return (
    <DestinationContext.Provider
      value={{
        destinationList,
        setDestinationList,
      }}
    >
      {children}
    </DestinationContext.Provider>
  );
};
