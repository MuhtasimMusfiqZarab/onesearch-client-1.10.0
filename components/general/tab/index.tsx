import React, { FC, useState } from "react";
import Link from "next/link";
import filterNavElements from "components/utils/navigation/tab";
import styles from "./style.module.scss";

interface Props {}

export const Tab: FC<Props> = ({}: Props): JSX.Element => {
  const [isActive, setActive] = useState<number>(1);

  const handleActive = (i: any) => {
    setActive(i);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {filterNavElements.map(
          (element, index): JSX.Element => {
            return (
              <li
                key={index}
                className={`${styles.listitem} ${
                  isActive == element.index ? styles.active : ""
                }`}
                onClick={() => handleActive(`${element.index}`)}
              >
                <Link href={`${element.route}`}>
                  <a>
                    {element.icon}
                    {element.title}
                  </a>
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </nav>
  );
};
