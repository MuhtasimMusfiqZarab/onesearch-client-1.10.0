import React from 'react';
import { IconProps } from '../utils/interfaces';

export const Prev = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="15" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 25.985 3.27 14 15 2.015 13.702 0 0 14l13.702 14L15 25.985Z" fill="#49789B" />
    </svg>
  );
};
