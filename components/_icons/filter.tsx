import React from 'components/uicontainers/404';
import { IconProps } from '../utils/interfaces';

export const Filter = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M27.1965 0.594727H1.80349C0.809055 0.594727 0 1.40372 0 2.39816V4.5206C0 5.51504 0.809055 6.3241 1.80349 6.3241H2.64784L11.9684 15.6447V23.8041C11.9684 24.0473 12.1149 24.2665 12.3396 24.3595C12.4139 24.3903 12.492 24.4053 12.5695 24.4053C12.726 24.4053 12.8797 24.3443 12.9947 24.2292L16.8779 20.3459C16.9907 20.2332 17.054 20.0803 17.054 19.9208V15.6446L26.3745 6.3241H27.1966C28.191 6.3241 29.0001 5.51504 29.0001 4.5206V2.39816C29 1.40372 28.1909 0.594727 27.1965 0.594727ZM16.0275 14.9707C15.9088 15.0895 15.8503 15.2454 15.8517 15.401V19.672L13.1708 22.3529V15.3975C13.1712 15.2431 13.1126 15.0886 12.9948 14.9707L4.34819 6.3241H24.6741L16.0275 14.9707ZM27.7977 4.5206C27.7977 4.85206 27.528 5.12178 27.1965 5.12178H1.80349C1.47203 5.12178 1.20231 4.85212 1.20231 4.5206V2.39816C1.20231 2.0667 1.47198 1.79698 1.80349 1.79698H27.1966C27.528 1.79698 27.7977 2.06665 27.7977 2.39816V4.5206H27.7977Z"
        fill={color ? color : 'white'}
      />
    </svg>
  );
};
