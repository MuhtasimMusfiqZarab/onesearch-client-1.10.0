import React from 'components/uicontainers/404';
import { IconProps } from '../utils/interfaces';

export const DownArrowRound = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="23" cy="23" r="22" stroke={color ? color : '#03396C'} strokeWidth="2" />
      <path
        d="M10.568 19.892 23 32.324l12.432-12.432"
        stroke={color ? color : '#03396C'}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
