import React, { FC } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  items: string[];
  defaultActive: string;
}

export const Tabs: FC<Props> = ({
  items,
  defaultActive,
}: Props): JSX.Element => {
  return (
    <div className={styles.tabs}>
      <ul>
        <li className={`${styles.tab__item} ${styles.tab__active}`}><a href="#">Search</a></li>
        <li className={styles.tab__item}><a href="#">Request</a></li>
        <li className={styles.tab__item}><a href="#">Deliver</a></li>
      </ul>
    </div>
  );
};
