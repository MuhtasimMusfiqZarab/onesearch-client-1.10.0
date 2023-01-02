import React, { FC } from "react";
import { DownArrowRound } from '../../../_icons'
import styles from "./styles.module.scss";

interface Props {
  scrollId: string;
  isDark?: boolean;
}

export const ScrollDown: FC<Props> = ({
  scrollId,
  isDark
}: Props): JSX.Element => {
  return (
    <div className={styles.scroll_down}>
      <a href={`#${scrollId}`}>
        <DownArrowRound color={isDark && '#ffffff'} />
      </a>
    </div>
  );
}
