import React, { FC, useState } from "react";
import {
  YoutubeIcon,
  FacebookIcon,
  LinkedinIcon,
  GoogleIcon,
} from "components/_icons";
import styles from "./style.module.scss";

interface Props {}

export const Tab: FC<Props> = ({}: Props): JSX.Element => {
  const [isActive, setActive] = useState<number>(1);

  const handleActive = (i) => {
    setActive(i);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li
          className={`${styles.listitem} ${
            isActive === 1 ? styles.active : ""
          }`}
          onClick={() => handleActive(1)}
        >
          <YoutubeIcon />
          Youtube
        </li>
        <li
          className={`${styles.listitem} ${
            isActive === 2 ? styles.active : ""
          }`}
          onClick={() => handleActive(2)}
        >
          <FacebookIcon />
          Facebook
        </li>
        <li
          className={`${styles.listitem} ${
            isActive === 3 ? styles.active : ""
          }`}
          onClick={() => handleActive(3)}
        >
          <LinkedinIcon />
          Linkedin
        </li>
        <li
          className={`${styles.listitem} ${
            isActive === 4 ? styles.active : ""
          }`}
          onClick={() => handleActive(4)}
        >
          <GoogleIcon />
          Google
        </li>
      </ul>
    </nav>
  );
};
