import React from 'react';
import { IconProps } from '../utils/interfaces';

export const CloseLite = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.534526 23L11.5 12.0084L22.4655 23L22.9737 22.4918L12.0074 11.4998L22.9737 0.507455L22.4655 0L11.5 10.9912L0.534526 0L0.0263672 0.507455L10.9927 11.4998L0.0263672 22.4918L0.534526 23Z"
        fill={color ? color : '#FF0000'}
      />
    </svg>
  );
};
