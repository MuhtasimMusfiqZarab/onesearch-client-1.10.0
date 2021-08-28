import React, { FC } from "react";
import { NotFoundIcon } from "components/_icons";

interface Props {}

const Index: FC<Props> = ({}: Props): JSX.Element => {
  return (
    <div>
      <NotFoundIcon />
      <div>Page Not Found!</div>
    </div>
  );
};

export default Index;
