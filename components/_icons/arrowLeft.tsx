import React from 'react';
import { IconProps } from '../utils/interfaces';

export const ArrowLeft = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="10" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 16.704 2.18 9 10 1.296 9.134 0 0 9l9.134 9L10 16.704Z"
        fill={color ? color : '#fff'}
      />
    </svg>
  );
};
