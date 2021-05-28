import React from 'react';
import { IconProps } from '../utils/interfaces';
import styles from './styles.module.scss';

export const Logo = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <div className={styles.albania}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle
          fill="none"
          stroke="#6c757d"
          strokeWidth="1"
          cx="50"
          cy="50"
          r="30"
        />
        <circle fill="#343a40" cx="50" cy="50" r="15" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg " viewBox="0 0 100 100">
        <circle fill="#343a40" cx="22" cy="90" r="6" />
      </svg>
    </div>
  );
};
