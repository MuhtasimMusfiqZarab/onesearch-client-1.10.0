import React from 'react';
import { IconProps } from '../utils/interfaces';

export const Locator = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="54" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="54" height="50" rx="10" fill="#49789B" />
      <path
        d="M27 10a1.5 1.5 0 0 1 1.49 1.325l.01.175v1.97c5.221.674 9.357 4.81 10.03 10.031l1.97-.001a1.5 1.5 0 0 1 .175 2.99l-.175.01h-1.97A11.631 11.631 0 0 1 28.5 36.53v1.97a1.5 1.5 0 0 1-2.99.175l-.01-.175.001-1.97a11.631 11.631 0 0 1-10.03-10.03H13.5a1.5 1.5 0 0 1-.175-2.99l.175-.01 1.97.001a11.631 11.631 0 0 1 10.031-10.03L25.5 11.5A1.5 1.5 0 0 1 27 10Zm0 6.375a8.625 8.625 0 1 0 0 17.25 8.625 8.625 0 0 0 0-17.25ZM27 19a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z"
        fill="#fff"
      />
    </svg>
  );
};
