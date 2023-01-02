import React from 'components/uicontainers/404/node_modules/react';
import { IconProps } from '../utils/interfaces';

export const DownloadsIcon = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M39.5721 42.4949H5.42781C4.73193 42.4949 4.17523 43.0516 4.17523 43.7475C4.17523 44.4433 4.73193 45 5.42781 45H39.5721C40.268 45 40.8247 44.4433 40.8247 43.7475C40.8247 43.0516 40.268 42.4949 39.5721 42.4949Z"
        fill={color ? color : '#7B7777'}
      />
      <path
        d="M21.6185 35.1371C21.8504 35.3691 22.1752 35.5083 22.4999 35.5083C22.8247 35.5083 23.1494 35.3784 23.3814 35.1371L33.3556 25.1629C33.8473 24.6711 33.8473 23.8825 33.3556 23.3907C32.8638 22.899 32.0752 22.899 31.5834 23.3907L23.7525 31.2217V1.25258C23.7525 0.556701 23.1958 0 22.4999 0C21.804 0 21.2473 0.556701 21.2473 1.25258V31.2217L13.4164 23.3907C12.9247 22.899 12.136 22.899 11.6443 23.3907C11.1525 23.8825 11.1525 24.6711 11.6443 25.1629L21.6185 35.1371Z"
        fill={color ? color : '#7B7777'}
      />
    </svg>
  );
};
