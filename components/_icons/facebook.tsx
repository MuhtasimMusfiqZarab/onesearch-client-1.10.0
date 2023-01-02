import React from 'components/uicontainers/404/node_modules/react';
import { IconProps } from '../utils/interfaces';

export const FacebookIcon = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="35" height="35" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.4999 0C22.5085 0 29 6.49237 29 14.5C29 22.5086 22.5085 29 14.4999 29C6.49138 29 0 22.5085 0 14.5C0 6.49237 6.49147 0 14.4999 0Z"
        fill="#3B5998"
      />
      <path
        d="M16.2654 9.98231H18.1341V7.22186H15.9374V7.23182C13.2757 7.32609 12.7302 8.82228 12.6821 10.3937H12.6767V11.7722H10.8642V14.4755H12.6767V21.7218H15.4081V14.4755H17.6457L18.0779 11.7722H15.409V10.9394C15.409 10.4083 15.7624 9.98231 16.2654 9.98231Z"
        fill="white"
      />
    </svg>
  );
};
