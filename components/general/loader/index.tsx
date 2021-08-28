import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";

interface Props {
  width?: number | string;
  height?: number | string;
  circle?: boolean;
  count?: number;
  style?: any;
}

export const Loader: FC<Props> = ({
  width = "100%",
  height = 16,
  circle = false,
  count,
  style,
}: Props): JSX.Element => {
  return (
    <Skeleton
      width={width}
      height={height}
      circle={circle}
      count={count}
      style={{ ...style }}
    />
  );
};
