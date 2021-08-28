import React from "react";
import { IconProps } from "../utils/interfaces";

export const CreditIcon = ({
  width,
  height,
  color,
}: IconProps): JSX.Element => {
  return (
    <svg
      width="45"
      height="32"
      viewBox="0 0 45 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37 2H8C4.68629 2 2 4.68629 2 8V24C2 27.3137 4.68629 30 8 30H37C40.3137 30 43 27.3137 43 24V8C43 4.68629 40.3137 2 37 2ZM8 0C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H37C41.4183 32 45 28.4183 45 24V8C45 3.58172 41.4183 0 37 0H8Z"
        fill="#8F8F8F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 11H2V9H44V11Z"
        fill="#8F8F8F"
      />
    </svg>
  );
};
