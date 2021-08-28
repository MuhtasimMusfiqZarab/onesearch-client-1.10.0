import React, { useState } from "react";
import Link from "next/link";
import sideNavElements from "components/utils/navigation/sidenav";
import { IsCurrentRoute } from "components/services/route";
import styles from "./styles.module.scss";

export default function SideNav() {
  const [currentActive, setCurrentActive] = useState<number>(0);
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          {sideNavElements.map(
            (element, index): JSX.Element => {
              return (
                <li className={`${styles.nav__item} `} key={index}>
                  <Link href={`${element.route}`} key={index}>
                    <a
                      className={`${
                        IsCurrentRoute(element) && styles.nav__itemSelected
                      }`}
                      onClick={() => {
                        setCurrentActive(index);
                      }}
                    >
                      {element.icon}
                      <p className={styles.nav__itemlabel}>{element.title}</p>
                    </a>
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      </nav>
    </div>
  );
}
