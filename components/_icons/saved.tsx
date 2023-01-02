import React from 'components/uicontainers/404';
import { IconProps } from '../utils/interfaces';

export const SavedIcon = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="31" height="48" viewBox="0 0 31 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.5882 1H1V46L15.2941 37.5294L29.5882 46V1Z" stroke="#8F8F8F" strokeWidth="2" />
    </svg>
  );
};
