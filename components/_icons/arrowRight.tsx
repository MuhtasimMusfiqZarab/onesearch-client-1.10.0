import React from 'react';
import { IconProps } from '../utils/interfaces';

export const ArrowRight = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="10" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 1.296 7.82 9 0 16.704.866 18 10 9 .866 0 0 1.296Z"
        fill={color ? color : '#fff'}
      />
    </svg>
  );
};
