import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Prev, Next } from '../../_icons';
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
          <Prev />
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
          <Next />
        </a>
      </nav>
    </div>
  );
}
