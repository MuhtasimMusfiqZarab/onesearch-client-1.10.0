import React from 'components/uicontainers/404';
import { IconProps } from '../utils/interfaces';

export const Save = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.8 1H1V25.8704L8.9 21.1889L16.8 25.8704V1Z" stroke={color} />
    </svg>
  );
};
