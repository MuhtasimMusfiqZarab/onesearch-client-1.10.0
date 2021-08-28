import React, { FC } from "react";
import { ServerErrorIcon } from "components/_icons";

interface Props {}

const index: FC<Props> = ({}: Props): JSX.Element => {
  return (
    <div>
      <ServerErrorIcon />
      <div>Server is under maintainance! Please try again later.</div>
    </div>
  );
};

export default index;
