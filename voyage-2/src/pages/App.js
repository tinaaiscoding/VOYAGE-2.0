import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DestinationContextProvider } from './Home/DestinationContext';
import { supabase } from '../config/supabase';
import Home from './Home/Home';
import Itinerary from './Itinerary/Itinerary';
import NavBar from '../components/NavBar/NavBar';
import LogInModal from '../components/RegistationModals/LoginModal';
import PackingList from './PackingList/PackingList';

import './App.scss';

function App() {
  const [displayLoginModal, setDisplayLoginModal] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const renderLoginModalHandler = () => {
    setDisplayLoginModal(true);
  };

  const closeLoginModalHandler = () => {
    setDisplayLoginModal(false);
  };

  return (
    <div className="App">
      <NavBar
        renderLoginModalHandler={renderLoginModalHandler}
        session={session}
      />

      {displayLoginModal && (
        <LogInModal
          onModalClose={closeLoginModalHandler}
        />
      )}
      <Routes>
        <Route path="/packinglist" element={<PackingList />} />

        <Route
          path="/itinerary"
          element={
            <DestinationContextProvider>
              <Itinerary />
            </DestinationContextProvider>
          }
        />
        <Route
          path="/"
          element={
            <DestinationContextProvider>
              <Home />
            </DestinationContextProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
