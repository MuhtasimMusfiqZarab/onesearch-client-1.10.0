import React from 'components/uicontainers/404/node_modules/react';
import { IconProps } from '../utils/interfaces';

export const DownArrow = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.9203 1.65998e-07L7.49988 6.25593L1.07972 1.28756e-08L8.71412e-08 0.692485L7.49988 8L15 0.692485L13.9203 1.65998e-07Z"
        fill={color ? color : 'white'}
      />
    </svg>
  );
};
