import React from 'react';
import { IconProps } from '../utils/interfaces';

export const Next = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="15" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 2.015 11.73 14 0 25.985 1.298 28 15 14 1.298 0 0 2.015Z" fill="#49789B" />
    </svg>
  );
};
