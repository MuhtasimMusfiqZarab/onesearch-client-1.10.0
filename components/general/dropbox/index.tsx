import React, { FC, useState, useRef, useEffect } from 'react';
import styles from './styles.module.scss';

interface Props {}

export const Dropbox: FC<Props> = ({}: Props): JSX.Element => {
  return (
    <ul className={styles.nav__list}>
      <li className={styles.nav__listitem}>
        About
        <ul className={styles.nav__listitemdrop}>
          <li>Our Team</li>
          <li>Our Process</li>
          <li>History</li>
        </ul>
      </li>
    </ul>
  );
};
