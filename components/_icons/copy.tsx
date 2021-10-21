import React from 'react';
import { IconProps } from '../utils/interfaces';

export const Copy = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)" fill="#49789B"><path d="M18.519 0H7.463a1.43 1.43 0 0 0-1.428 1.429v3.354h1.304V1.429c0-.069.056-.125.124-.125H18.52c.068 0 .124.056.124.125v11.055a.125.125 0 0 1-.124.125h-3.25v1.304h3.25a1.43 1.43 0 0 0 1.429-1.429V1.43A1.43 1.43 0 0 0 18.518 0Z" /><path d="M12.537 6.087H1.48A1.43 1.43 0 0 0 .052 7.516V18.57A1.43 1.43 0 0 0 1.482 20h11.054a1.43 1.43 0 0 0 1.43-1.429V7.516a1.43 1.43 0 0 0-1.43-1.43Zm0 12.609H1.48a.125.125 0 0 1-.124-.125V7.516c0-.069.056-.125.124-.125h11.056c.068 0 .124.056.124.125V18.57a.125.125 0 0 1-.124.125Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z" /></clipPath></defs></svg>
  );
};
