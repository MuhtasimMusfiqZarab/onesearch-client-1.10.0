import React from 'components/uicontainers/404/node_modules/react';
import { IconProps } from '../utils/interfaces';

export const Warning = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="24" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.158 19.149 12.92 1.415a1.418 1.418 0 0 0-.652-.591V.697l-.685.004a1.42 1.42 0 0 0-1.15.714L.194 19.15a1.436 1.436 0 0 0 1.244 2.154h20.477a1.436 1.436 0 0 0 1.243-2.154Z"
        fill="#666"
      />
      <path
        d="M.84 19.149 11.077 1.415a1.436 1.436 0 0 1 2.487 0L23.803 19.15a1.436 1.436 0 0 1-1.243 2.154H2.083a1.436 1.436 0 0 1-1.244-2.154Z"
        fill="gray"
      />
      <path d="m2.678 19.527 9.65-16.714 9.649 16.714h-19.3Z" fill="#E6AF2E" />
      <path
        d="M12.32 18.303a1.332 1.332 0 1 0 0-2.664 1.332 1.332 0 0 0 0 2.664ZM12.328 7.259c-.72 0-1.29.61-1.241 1.329l.352 5.166a.891.891 0 0 0 1.778 0l.352-5.166a1.244 1.244 0 0 0-1.24-1.33Z"
        fill="#666"
      />
    </svg>
  );
};
