import React, { FC, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import ClientImage from '/public/client.png';
import styles from './styles.module.scss';

interface Props {
  currentUser: any;
}

export const Dropbox: FC<Props> = ({ currentUser }: Props): JSX.Element => {
  let [userName, setUserName] = useState(null);
  let [userAvatar, setUserAvatar] = useState(null);

  useEffect(() => {
    if (currentUser) {
      setUserName(currentUser.firstName);
      setUserAvatar(currentUser.avatarLink);
    }
  }, [currentUser]);

  return (
    <ul className={styles.nav__list}>
      <li className={styles.nav__listitem}>
        <div className={styles.logged}>
          <div className={styles.logged__thumb}>
            {userAvatar && <Image src={userAvatar} alt="Nafiz" width="100%" height="100%" />}
          </div>
          <div className={styles.logged__details}>
            <span className={styles.logged__user}>{userName}</span>
            <span className={styles.logged__plan}>{userName}</span>
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
