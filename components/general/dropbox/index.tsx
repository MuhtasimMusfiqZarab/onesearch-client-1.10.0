import React, {
  FC,
  useState,
  useRef,
  useEffect
} from 'components/uicontainers/404/node_modules/react';
import Image from 'components/uicontainers/home/services/node_modules/next/image';
import Link from 'components/uicontainers/home/text/node_modules/next/link';

import styles from './styles.module.scss';

import { useRouter } from 'next/router';

interface Props {
  currentUser: any;
}

export const Dropbox: FC<Props> = ({ currentUser }: Props): JSX.Element => {
  let [userName, setUserName] = useState(null);
  let [userAvatar, setUserAvatar] = useState(null);
  let [userAccessRole, setUserAccessRole] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      setUserName(currentUser.firstName);
      setUserAvatar(currentUser.avatarLink);
      setUserAccessRole(currentUser.accessRole);
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
            <span className={styles.logged__plan}>{userAccessRole}</span>
          </div>
        </div>

        <ul className={styles.nav__listitemdrop}>
          <li onClick={logout}>Logout</li>
          <li>
            <Link href="/dashboard/settings/profile">
              <p>View Profile</p>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};
