import React, { FC, useState } from "react";
import Link from "next/link";
import filterNavElements from "components/utils/resolver/navigation/tab";
import { useRouter } from "next/router";
import styles from "./style.module.scss";

interface Props { }

export const Tab: FC<Props> = ({ }: Props): JSX.Element => {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState<string>(router.pathname);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {filterNavElements.map(
          (element, index): JSX.Element => {
            return (
              <li
                className={`${styles.listitem} ${currentRoute === element.route ? styles.active : ""
                  }`}
              >
                <Link href={`${element.route}`} key={index}>
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
