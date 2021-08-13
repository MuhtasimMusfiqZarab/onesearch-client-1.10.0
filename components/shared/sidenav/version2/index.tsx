import {
  BinocularIcon,
  RequestIcon,
  SubscriptionIcon,
  CreditIcon,
  DownloadsIcon,
  SettingsIcon,
} from "../../../_icons";
import styles from "./styles.module.scss";

export default function SideNav() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={`${styles.nav__item} ${styles.nav__itemSelected}`}>
            <a href="#">
              <BinocularIcon />
              <p className={styles.nav__itemlabel}>Search</p>
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">
              <RequestIcon />
              <p className={styles.nav__itemlabel}>Request</p>
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">
              <SubscriptionIcon />
              <p className={styles.nav__itemlabel}>Subscription</p>
            </a>
          </li>
          {/* <li className={styles.nav__item}>
            <a href="#">
              <CreditIcon />
              <p className={styles.nav__itemlabel}>Credit</p>
            </a>
          </li> */}
          <li className={styles.nav__item}>
            <a href="#">
              <DownloadsIcon />
              <p className={styles.nav__itemlabel}>Download</p>
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">
              <SettingsIcon />
              <p className={styles.nav__itemlabel}>Settings</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
