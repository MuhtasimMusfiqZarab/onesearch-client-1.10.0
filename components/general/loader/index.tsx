import Skeleton from "react-loading-skeleton";

interface Props {
  width?: number | string;
  height?: number | string;
  circle?: boolean;
  count?: number;
  style?: any;
}

export default function Loader({
  width = "100%",
  height = 16,
  circle = false,
  count,
  style,
}: Props) {
  return (
    <Skeleton
      width={width}
      height={height}
      circle={circle}
      count={count}
      style={{ ...style }}
    />
  );
}
