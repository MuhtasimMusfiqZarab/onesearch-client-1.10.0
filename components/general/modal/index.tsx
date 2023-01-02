import React, { useState } from 'components/uicontainers/404';
import styles from './style.module.scss';

const Modal = ({ isOpen, setIsOpen, children }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <button className={styles.modal__dismiss} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
          </button>
          <div className={styles.modal__inner}>{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
