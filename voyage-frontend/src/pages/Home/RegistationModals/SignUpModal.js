import { useState } from 'react';
import LoginModal from './LoginModal';
import Modal from '../../../components/UI/Modal';

import './RegistationModals.scss';

const SignUpModal = (props) => {
  const closeSignUpModalHandler = () => {
    props.onModalClose();
  };

  const [displayLoginModal, setDisplayLoginModal] = useState(false);

  const renderLoginModalHandler = () => {
    setDisplayLoginModal(true);
  };

  const closeLoginModalHandler = () => {
    setDisplayLoginModal(false);
    props.onModalClose();
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
          onClick={closeSignUpModalHandler}
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

        <form>
          <label>NAME:</label>
          <input type="text" />

          <label>EMAIL:</label>
          <input type="text" />

          <label>PASSWORD:</label>
          <input type="password" />

          <button className="button-80">SIGN UP</button>
        </form>
      </Modal>
    );
  }
};

export default SignUpModal;
