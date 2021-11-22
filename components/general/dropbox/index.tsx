import React, { FC, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

import { useRouter } from 'next/router';

interface Props {
  currentUser: any;
}

export const Dropbox: FC<Props> = ({ currentUser }: Props): JSX.Element => {
  let [userName, setUserName] = useState(null);
  let [userAvatar, setUserAvatar] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      setUserName(currentUser.firstName);
      setUserAvatar(currentUser.avatarLink);
    }
  }, [currentUser]);

  const logout = () => {
    localStorage.removeItem('jwtToken');
    router.reload();
  };

  return (
    <ul className={styles.nav__list}>
      <li className={styles.nav__listitem}>
        <div className={styles.logged}>
          <div className={styles.logged__thumb}>
            {userAvatar && <Image src={userAvatar} alt="Nafiz" width="100%" height="100%" />}
          </div>
          <div className={styles.logged__details}>
            <span className={styles.logged__user}>{userName}</span>
            <span className={styles.logged__plan}>Demo</span>
          </div>
        </div>

        <ul className={styles.nav__listitemdrop}>
          <li onClick={logout}>Logout</li>
          <li>View Profile</li>
        </ul>
      </li>
    </ul>
  );
};
