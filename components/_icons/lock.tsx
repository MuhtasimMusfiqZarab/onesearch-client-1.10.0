import React from 'react';
import { IconProps } from '../utils/interfaces';

export const Lock = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="11.5" width="16.5" height="14" rx="3.5" stroke={color} />
      <path d="M3.99995 10C3.66662 7 4.19995 1 8.99995 1C13.8 1 14.3333 7 14 10" stroke={color} />
    </svg>
  );
};
