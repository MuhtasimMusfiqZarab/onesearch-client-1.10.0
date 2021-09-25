import React, { FC } from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  subtitle?: string;
  isUnderline?: boolean;
  isDark?: boolean;
}

export const Heading: FC<Props> = ({
  title,
  subtitle,
  isUnderline,
  isDark,
}: Props): JSX.Element => {
  return (
    <div className={`${styles.heading} ${isDark ? styles.heading__dark : ''}`}>
      <h2 className={`${styles.heading__title} ${isUnderline ? 'lined' : ''}`} dangerouslySetInnerHTML={{ __html: title }}></h2>
      {subtitle && <p className={styles.heading__subtitle} dangerouslySetInnerHTML={{ __html: subtitle }}></p>}
    </div>
  );
};
