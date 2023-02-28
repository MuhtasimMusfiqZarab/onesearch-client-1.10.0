import React, { FC, useState, useEffect, Children } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  type: string;
  message: string;
  children: any;
}

export const Popup: FC<Props> = ({ type, message, children }): JSX.Element => {
  const notify = () => {
    if (type === 'success') {
      toast.success(message, {
        position: toast.POSITION.BOTTOM_LEFT
      });
    }

    if (type === 'error') {
      toast.error(message, {
        position: toast.POSITION.BOTTOM_LEFT
      });
    }

    if (type === 'info') {
      toast.info(message, {
        position: toast.POSITION.BOTTOM_LEFT
      });
    }
  };

  return (
    <div>
      <button onClick={notify}>{children}</button>
      <ToastContainer />
    </div>
  );
};
