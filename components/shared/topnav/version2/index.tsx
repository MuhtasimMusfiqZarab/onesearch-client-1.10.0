import Link from "next/link";
import { useRouter } from "next/router";
import { BreadIcon, CloseIcon } from "components/_icons";
import styles from "./style.module.scss";

interface Props {
  isTransperant?: any;
}

export default function TopNav({ isTransperant }: Props) {
  return (
    <nav
      className={`${styles.nav} ${isTransperant ? styles.transparent : ""} `}
    >
      <input
        type="checkbox"
        id="nav__checkbox"
        className={styles.nav__checkbox}
      />
      <label htmlFor="nav__checkbox" className={styles.nav__toggle}>
        <div className={styles.menu}>
          <BreadIcon />
        </div>
        <div className={styles.close}>
          <CloseIcon />
        </div>
      </label>
      <ul className={styles.nav__menu}>
        <li>
          <img src="/logo.png" alt="" className="image" />
        </li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/search">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
