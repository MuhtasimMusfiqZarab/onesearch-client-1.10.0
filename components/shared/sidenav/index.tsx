import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import sideNavElements, { adminNavElement } from 'components/utils/resolver/navigation/sidenav';
import { IsCurrentRoute } from 'components/services/route';
import { useCurrentUser } from 'components/_context/user/current-user';

import styles from './styles.module.scss';

export default function SideNav() {
  let prevBtn = useRef(null);
  let nextBtn = useRef(null);
  let navList = useRef(null);

  const [currentActive, setCurrentActive] = useState<number>(0);

  const { currentUser, loading: loadingUser } = useCurrentUser();

  useEffect(() => {
    let listScrollRight = navList.current.scrollLeft;
    nextBtn.current.addEventListener('click', (e) => {
      e.preventDefault();
      navList.current.scrollLeft = listScrollRight + 50;
      listScrollRight += 50;
    });

    let listScrollLeft = navList.current.scrollRight;
    prevBtn.current.addEventListener('click', (e) => {
      e.preventDefault();
      navList.current.scrollLeft = listScrollLeft + 50;
      listScrollLeft += 50;
    });
  }, []);

  return (
    <div>
      <nav className={styles.nav}>
        <a href="#" className={styles.prev__btn} ref={prevBtn}>
          <svg width="15" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 25.985 3.27 14 15 2.015 13.702 0 0 14l13.702 14L15 25.985Z"
              fill="#49789B"
            />
          </svg>
        </a>
        <ul className={styles.nav__list} ref={navList}>
          {sideNavElements.map(
            (element, index): JSX.Element => {
              return (
                <li className={`${styles.nav__item} `} key={index}>
                  <Link href={`${element.route}`} key={index}>
                    <a
                      className={`${IsCurrentRoute(element) && styles.nav__itemSelected}`}
                      onClick={() => {
                        setCurrentActive(index);
                      }}>
                      {element.icon}
                      <p className={styles.nav__itemlabel}>{element.title}</p>
                    </a>
                  </Link>
                </li>
              );
            }
          )}
        </ul>
        <a href="#" className={styles.next__btn} ref={nextBtn}>
          <svg width="15" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2.015 11.73 14 0 25.985 1.298 28 15 14 1.298 0 0 2.015Z" fill="#49789B" />
          </svg>
        </a>
      </nav>
    </div>
  );
}
