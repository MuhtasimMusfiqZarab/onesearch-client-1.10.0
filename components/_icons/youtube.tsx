import React from 'components/uicontainers/404';
import { IconProps } from '../utils/interfaces';

export const YoutubeIcon = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.9771 24.7606H6.02293C2.69655 24.7606 0 22.064 0 18.7376V10.2624C0 6.93598 2.69655 4.23943 6.02293 4.23943H22.9771C26.3034 4.23943 29 6.93598 29 10.2624V18.7376C29 22.064 26.3034 24.7606 22.9771 24.7606ZM18.9038 14.0876L10.9738 10.3055C10.7625 10.2047 10.5184 10.3588 10.5184 10.5929V18.3935C10.5184 18.6309 10.7689 18.7848 10.9807 18.6775L18.9107 14.659C19.1464 14.5395 19.1423 14.2014 18.9038 14.0876Z"
        fill="#FF0000"
      />
    </svg>
  );
};
