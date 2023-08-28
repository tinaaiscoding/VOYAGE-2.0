import './Modal.scss';

const Modal = (props) => {
  const classes = 'modal ' + (props.className ? props.className : '');

  return (
    <div>
      <div className="visible" id="backdrop"></div>
      <div className={classes} id={props.id}>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
