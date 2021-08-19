import React from "react";
import { IconProps } from "../utils/interface";

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
      <rect
        x="1"
        y="1"
        width="43"
        height="30"
        rx="7"
        stroke="#8F8F8F"
        stroke-width="2"
      />
      <path d="M2 10H44" stroke="#8F8F8F" stroke-width="2" />
    </svg>
  );
};
