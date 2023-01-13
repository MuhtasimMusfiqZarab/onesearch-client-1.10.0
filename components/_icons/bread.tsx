import React from 'react';
import { IconProps } from '../utils/interfaces';

export const BreadIcon = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="26" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1h23.625M1 11.5h23.625M1 22h23.625"
        stroke="#49789B"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
