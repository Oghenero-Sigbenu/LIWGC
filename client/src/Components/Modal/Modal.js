import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';

const Modal = ({ close, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button onClick={close} className="close-mod" >
          <FontAwesomeIcon icon={faTimes} color="white" />
        </button>
      </section>
    </div>
  );
};

export default Modal;