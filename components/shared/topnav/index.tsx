import React, { FC } from 'react';
import { Logo } from '../../_icons';

import style from './styles.module.scss';

const TopNav: FC<any> = ({ items }): JSX.Element => {
  return (
    <nav className={style.nav}>
      <ul className={style.nav__list}>
        <li className={style.nav__listlogo}>
          <Logo width={50} height={50} />
        </li>
        <li className={style.nav__listitem}>
          About
          <ul className={style.nav__listitemdrop}>
            <li>Our Team</li>
            <li>Our Process</li>
            <li>History</li>
          </ul>
        </li>
        <li className={style.nav__listitem}>
          Work
          <ul className={style.nav__listitemdrop}>
            <li>Portfolio</li>
            <li>Showcase</li>
          </ul>
        </li>
        <li className={style.nav__listitem}>Contact</li>
      </ul>
    </nav>
  );
};

export default TopNav;
