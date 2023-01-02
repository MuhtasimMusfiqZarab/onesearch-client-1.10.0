import React from 'components/uicontainers/404';
import { IconProps } from '../utils/interfaces';

export const Lock = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="1"
        y="10"
        width="12"
        height="12"
        rx="3"
        stroke={color ?? '#49789B'}
        strokeWidth="2"
      />
      <path
        d="M3.06357 8.14858C2.7988 5.76572 3.22242 1 7.035 1C10.8476 1 11.2712 5.76572 11.0065 8.14858"
        stroke={color ?? '#49789B'}
        strokeWidth="2"
      />
      <circle cx="6.58857" cy="15.5886" r="1.58857" fill={color ?? '#49789B'} />
    </svg>
  );
};
