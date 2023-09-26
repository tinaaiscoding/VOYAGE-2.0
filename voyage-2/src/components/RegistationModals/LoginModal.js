import { useState } from 'react';
import SignUpModal from './SignUpModal';
import Modal from '../UI/Modal';
import { supabase } from '../../config/supabase';

import './RegistationModals.scss';

const LogInModal = ({ onModalClose }) => {
  const [displaySignUpModal, setDisplaySignUpModal] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const renderSignUpModalHandler = () => {
    setDisplaySignUpModal(true);
  };

  const closeSignUpModalHandler = () => {
    setDisplaySignUpModal(false);
    onModalClose();
  };

  const handleUserDataChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleLogin = async (event) => {
    event.preventDefault()

    const { data, error } = await supabase.auth.signInWithPassword(userData);

    if (error) {
      console.log(error);
    } else {
      onModalClose();
    }
  };

  const loginNavSelected = {
    backgroundColor: 'rgb(255, 140, 0)',
    color: 'rgb(255, 240, 222)',
    fontWeight: '700',
  };

  if (displaySignUpModal) {
    return <SignUpModal onModalClose={closeSignUpModalHandler} />;
  } else {
    return (
      <Modal id="Login-Modal">
        <span className="material-symbols-outlined" onClick={onModalClose}>
          close
        </span>
        <nav>
          <ul>
            <li className="sign-up" onClick={renderSignUpModalHandler}>
              SIGN UP
            </li>
            <li style={loginNavSelected}>LOGIN</li>
          </ul>
        </nav>

        <form onSubmit={handleLogin}>
          <label>EMAIL</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleUserDataChange}
          />

          <label>PASSWORD</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleUserDataChange}
          />

          <button className="button-80">LOG IN</button>
        </form>
      </Modal>
    );
  }
};

export default LogInModal;
