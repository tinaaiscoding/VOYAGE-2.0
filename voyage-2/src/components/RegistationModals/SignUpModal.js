import { useEffect, useState } from 'react';
import LoginModal from './LoginModal';
import Modal from '../UI/Modal';
import { supabase } from '../../config/supabase';

import './RegistationModals.scss';

const SignUpModal = ({ onModalClose }) => {
  const [displayLoginModal, setDisplayLoginModal] = useState(false);
  const [userMetaData, setUserMetaData] = useState({
    name: '',
    gender: '',
  });

  const [userData, setUserData] = useState({
    email: '',
    password: '',
    options: {
      data: userMetaData,
    },
  });

  const handleUserDataChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleUserMetaDataChange = (event) => {
    setUserMetaData({
      ...userMetaData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setUserData({
      ...userData,
      options: {
        data: userMetaData,
      },
    });
  }, [userMetaData]);

  const handleSignUp = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase.auth.signUp(userData);
 
    if (error) {
      console.log(error);
    } else {
      onModalClose();
    }
  };

  const renderLoginModalHandler = () => {
    setDisplayLoginModal(true);
  };

  const closeLoginModalHandler = () => {
    setDisplayLoginModal(false);
    onModalClose();
  };

  const signUpNavSelected = {
    backgroundColor: 'rgb(255, 140, 0)',
    color: 'rgb(255, 240, 222)',
    fontWeight: '700',
  };

  if (displayLoginModal) {
    return <LoginModal onModalClose={closeLoginModalHandler} />;
  } else {
    return (
      <Modal id="SignUp-Modal">
        <span
          className="material-symbols-outlined"
          onClick={onModalClose}
        >
          close
        </span>
        <nav>
          <ul>
            <li style={signUpNavSelected} className="sign-up">
              SIGN UP
            </li>
            <li onClick={renderLoginModalHandler}>LOGIN</li>
          </ul>
        </nav>

        <form onSubmit={handleSignUp}>
          <label>NAME</label>
          <input
            type="text"
            name="name"
            value={userMetaData.name}
            onChange={handleUserMetaDataChange}
          />

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

          <label>GENDER</label>
          <div className="flex">
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={handleUserMetaDataChange}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={handleUserMetaDataChange}
            />
            <label htmlFor="male">Male</label>
          </div>

          <button className="button-80">SIGN UP</button>
        </form>
      </Modal>
    );
  }
};

export default SignUpModal;
