import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { DestinationContextProvider } from './components/Home/DestinationContext';

import Home from './components/Home/Home';
// import AddDestination from './components/Home/AddDestination/AddDestination';
import Itinerary from './components/Itinerary/Itinerary';
// import Map from './components/Map/Map';

import './App.scss';

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <Link to="/">HOME</Link>
        {/* <Link to="/add-destination">ADD DESTINATION</Link> */}
        <Link to="/itinerary">ITINERARY</Link>
        {/* <Link to="/map">MAP</Link> */}
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <DestinationContextProvider>
              <Home />
            </DestinationContextProvider>
          }
        />

        <Route
          path="/itinerary"
          element={
            <DestinationContextProvider>
              <Itinerary />
            </DestinationContextProvider>
          }
        />
        {/* <Route
          path="/map"
          element={
            <Map
              markerInfo={markerInfo}
              setMarkerInfo={setMarkerInfo}
              markerList={markerList}
              setMarkerList={setMarkerList}
            />
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
