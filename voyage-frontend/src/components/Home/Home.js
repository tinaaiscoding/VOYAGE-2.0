import { useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

import Main from './Main';
import AddDestination from './AddDestination/AddDestination';
import SignUpModal from './SignUpLoginModal/SignUpModal';

import './Home.scss';

const Home = (props) => {
  const [displaySignUpModal, setDisplaySignUpModal] = useState(false);

  const renderSignUpModalHandler = () => {
    setDisplaySignUpModal(true);
  };

  const closeSignUpModalHandler = () => {
    setDisplaySignUpModal(false);
  };

  return (
    <div className="home">
      <Main renderSignUpModalHandler={renderSignUpModalHandler} />

      <AddDestination />

      {displaySignUpModal && (
        <SignUpModal onModalClose={closeSignUpModalHandler} />
      )}
    </div>
  );
};

export default Home;
