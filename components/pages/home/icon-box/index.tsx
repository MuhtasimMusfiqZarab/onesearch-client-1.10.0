import React, { FC } from "react";
import { BinocularIcon } from "components/_icons";
import styles from "./styles.module.scss";

interface Props {
  Media: any;
  title: string;
  isDark?: boolean;
}

export const IconBox: FC<Props> = ({
  Media,
  title,
  isDark,
}: Props): JSX.Element => {
  return (
    <div className={`${styles.icon_box} ${isDark && styles.icon_box__dark}`}>
      <span className={styles.icon_box__media}>
        <Media />
      </span>
      <h3 className={styles.icon_box__title}>{title}</h3>
    </div>
  );
};
