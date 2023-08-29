import { useState } from 'react';

import Home from './components/Home/Home';
// import AddDestination from './components/Home/AddDestination/AddDestination';
import Itinerary from './components/Itinerary/Itinerary';
// import Map from './components/Map/Map';

import { Routes, Route, Link } from 'react-router-dom';

import './App.scss';

function App() {
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
            <Home 
              destinationData={destinationData}
              setDestinationData={setDestinationData}
              destinationList={destinationList}
              setDestinationList={setDestinationList}
              countryList={countryList}
              setCountryList={setCountryList}
              stateList={stateList}
              setStateList={setStateList}
              cityList={cityList}
              setCityList={setCityList}
            />
          } 
        />
       
        <Route
          path="/itinerary"
          element={
            <Itinerary
              destinationData={destinationData}
              setDestinationData={setDestinationData}
              destinationList={destinationList}
              setDestinationList={setDestinationList}
              countryList={countryList}
              setCountryList={setCountryList}
              stateList={stateList}
              setStateList={setStateList}
              cityList={cityList}
              setCityList={setCityList}
            />
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
