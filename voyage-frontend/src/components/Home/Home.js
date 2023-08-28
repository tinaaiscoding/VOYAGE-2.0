import { useState } from 'react';
import SignUpModal from './SignUpLoginModal/SignUpModal';

import './Home.scss'

const Home = () => {
  const [displaySignUpModal, setDisplaySignUpModal] = useState(false);

  const renderSignUpModalHandler = () => {
    setDisplaySignUpModal(true);
  };

  const closeSignUpModalHandler = () => {
    setDisplaySignUpModal(false);
  };

  return (
    <div className="home">
      <div className='home-header'>
        <p>PLAN YOUR NEXT DESTINATION</p>
        <h1>voyage</h1>
      <button className='button-17' onClick={renderSignUpModalHandler}>LET'S PLAN</button>
      </div>

      {displaySignUpModal && (
        <SignUpModal onModalClose={closeSignUpModalHandler} />
      )}
    </div>
  );
};

export default Home;
