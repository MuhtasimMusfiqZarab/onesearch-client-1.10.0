import React from 'components/uicontainers/404/node_modules/react';
import { IconProps } from '../utils/interfaces';

export const Reset = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.2505 4.96898C18.5655 3.90598 17.6978 2.98376 16.6933 2.23879L18.9214 0H12.437V6.5156L15.4665 3.4715C17.7626 5.08058 19.1869 7.74567 19.1869 10.5969C19.1869 15.387 15.2899 19.284 10.4998 19.284C5.70967 19.284 1.81267 15.387 1.81267 10.5969C1.81267 7.24266 3.68772 4.24724 6.70614 2.7795L5.95574 1.23631C4.22597 2.07737 2.76338 3.38049 1.72618 5.00461C0.660152 6.67393 0.0966797 8.60767 0.0966797 10.5969C0.0966797 16.3332 4.76347 21 10.4998 21C16.2361 21 20.9029 16.3332 20.9029 10.5969C20.9029 8.59268 20.3315 6.64664 19.2505 4.96898Z"
        fill={color ? color : '#49789B'}
      />
    </svg>
  );
};
