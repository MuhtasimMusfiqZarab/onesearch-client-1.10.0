import Link from 'next/link';
import styles from './styles.module.scss';

export default function index() {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <header>
          <div>
            <p className={styles.logo}>OneSearch</p>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a className={styles.btn}>Sign Up</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              We brings you all the contact information you need from anywhere
              in the web. Get all the email data you need with
              <span> one search</span>
            </p>
            <a href="#" className={styles.btn}>
              Get Started!
            </a>
          </div>
          <div className={styles.img}>
            <div className={styles.socialIcons}>
              <img src="/social-icon1.png" alt="" />
              <img src="/social-icon2.png" alt="" />
              <img src="/social-icon3.png" alt="" />
              <img src="/social-icon4.png" alt="" />
              <img src="/social-icon5.png" alt="" />
            </div>
            <img src="email-icon.png" alt="" className={styles.emailIcon} />
          </div>
        </div>
        <div className={styles.wave}>
          <img src="/wave.svg" alt="" className={styles.mainWave} />
        </div>
      </div>
    </div>
  );
}
