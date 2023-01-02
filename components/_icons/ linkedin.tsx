import React from 'components/uicontainers/404';
import { IconProps } from '../utils/interfaces';

export const LinkedinIcon = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="35" height="35" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path
          d="M14.5 28.999C22.5081 28.999 29 22.5072 29 14.499C29 6.4909 22.5081 -0.000976562 14.5 -0.000976562C6.49187 -0.000976562 0 6.4909 0 14.499C0 22.5072 6.49187 28.999 14.5 28.999Z"
          fill="#007AB9"
        />
        <path
          d="M23.1636 15.6665V21.6446H19.6977V16.0672C19.6977 14.6667 19.1973 13.7104 17.9424 13.7104C16.9848 13.7104 16.4159 14.3542 16.1646 14.9777C16.0734 15.2005 16.0498 15.5099 16.0498 15.8224V21.6443H12.5837C12.5837 21.6443 12.6302 12.198 12.5837 11.2202H16.0501V12.6974C16.0431 12.709 16.0333 12.7204 16.0271 12.7315H16.0501V12.6974C16.5107 11.9887 17.3321 10.9754 19.1738 10.9754C21.4541 10.9754 23.1636 12.4653 23.1636 15.6665ZM8.95778 6.19543C7.77215 6.19543 6.99646 6.97371 6.99646 7.99624C6.99646 8.99706 7.74966 9.79782 8.91229 9.79782H8.93477C10.1437 9.79782 10.8953 8.99706 10.8953 7.99624C10.8723 6.97371 10.1437 6.19543 8.95778 6.19543ZM7.20247 21.6446H10.6673V11.2202H7.20247V21.6446Z"
          fill="#F1F2F2"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="29" height="29" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
