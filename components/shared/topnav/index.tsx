import React, { FC } from 'react';
import { Logo } from '../../icons/logo';

const TopNav: FC<any> = ({ items }): JSX.Element => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__listlogo">
          <Logo width={50} height={50} />
        </li>
        <li className="nav__listitem">
          About
          <ul className="nav__listitemdrop">
            <li>Our Team</li>
            <li>Our Process</li>
            <li>History</li>
          </ul>
        </li>
        <li className="nav__listitem">
          Work
          <ul className="nav__listitemdrop">
            <li>Portfolio</li>
            <li>Showcase</li>
          </ul>
        </li>
        <li className="nav__listitem">Contact</li>
      </ul>
    </nav>
  );
};

export default TopNav;
