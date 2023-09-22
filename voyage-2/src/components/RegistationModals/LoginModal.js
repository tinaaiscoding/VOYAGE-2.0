import { useState } from 'react';
import SignUpModal from './SignUpModal';
import Modal from '../UI/Modal';

import './RegistationModals.scss';

const LogInModal = (props) => {
  const closeLoginModalHandler = () => {
    props.onModalClose();
  };

  const [displaySignUpModal, setDisplaySignUpModal] = useState(false);

  const renderSignUpModalHandler = () => {
    setDisplaySignUpModal(true);
  };

  const closeSignUpModalHandler = () => {
    setDisplaySignUpModal(false);
    props.onModalClose();
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
        <span
          className="material-symbols-outlined"
          onClick={closeLoginModalHandler}
        >
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

        <form>
          <label>EMAIL</label>
          <input type="text" />

          <label>PASSWORD</label>
          <input type="password" />

          <button className="button-80">LOG IN</button>
        </form>
      </Modal>
    );
  }
};

export default LogInModal;
