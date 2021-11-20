import React, { FC, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import ClientImage from '/public/client.png';
import styles from './styles.module.scss';

interface Props { }

export const Dropbox: FC<Props> = ({ }: Props): JSX.Element => {
  return (
    <ul className={styles.nav__list}>
      <li className={styles.nav__listitem}>

        <div className={styles.logged}>
          <div className={styles.logged__thumb}>
            <Image src={ClientImage} alt="Nafiz" width="100%" height="100%" />
          </div>
          <div className={styles.logged__details}>
            <span className={styles.logged__user}>Nafiz</span>
            <span className={styles.logged__plan}>Personal</span>
          </div>
        </div>

        <ul className={styles.nav__listitemdrop}>
          <li>Our Team</li>
          <li>Our Process</li>
          <li>History</li>
        </ul>
      </li>
    </ul>
  );
};
