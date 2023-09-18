import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { DestinationContextProvider } from './Home/DestinationContext';

import Home from './Home/Home';
import Itinerary from './Itinerary/Itinerary';
import NavBar from '../components/NavBar/NavBar';
// import Map from './components/Map/Map';
import SignUpModal from '../components/RegistationModals/SignUpModal';

import './App.scss';

function App() {
  const [displaySignUpModal, setDisplaySignUpModal] = useState(false);

  const renderSignUpModalHandler = () => {
    setDisplaySignUpModal(true);
  };

  const closeSignUpModalHandler = () => {
    setDisplaySignUpModal(false);
  };
  
  return (
    <div className="App">
      <NavBar renderSignUpModalHandler={renderSignUpModalHandler} />

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

      {displaySignUpModal && (
        <SignUpModal onModalClose={closeSignUpModalHandler} />
      )}
    </div>
  );
}

export default App;
