import React, { useState } from "react";
import Link from "next/link";
import topNavElements from "components/utils/navigation/topnav";
import { isCurrentRoute } from "components/services/route";
import { BreadIcon, CloseIcon, Logo } from "components/_icons";
import styles from "./style.module.scss";

interface Props {
  isTransperant?: any;
}

export default function TopNav({ isTransperant }: Props) {
  const [currentActive, setCurrentActive] = useState<number>(0);

  return (
    <nav
      className={`${styles.nav} ${isTransperant ? styles.transparent : ""} `}
    >
      <input
        type="checkbox"
        id="nav__checkbox"
        className={styles.nav__checkbox}
      />
      <label htmlFor="nav__checkbox" className={styles.nav__toggle}>
        <div className={styles.menu}>
          <BreadIcon />
        </div>
        <div className={styles.close}>
          <CloseIcon />
        </div>
      </label>
      <ul className={styles.nav__menu}>
        <li>
          <Link href="/">
            {/* <a> */}
            <Logo />
            {/* </a> */}
          </Link>
        </li>
        {topNavElements.map(
          (element, index): JSX.Element => {
            return (
              <li>
                <Link href={`${element.route}`} key={index}>
                  <a
                    className={`${
                      isCurrentRoute(element) && styles.activeNavElement
                    }`}
                    onClick={() => {
                      setCurrentActive(index);
                    }}
                  >
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
}
