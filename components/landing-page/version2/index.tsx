import Link from "next/link";
import { WebIcon } from "../../_icons";
import TopNav from "../../shared/topnav/version2";
import styles from "./styles.module.scss";

export default function index() {
  return (
    <div className={styles.body}>
      <TopNav />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>First Part</p>
          </div>
          <div className={styles.img}>
            <div className={styles.socialIcons}>
              <WebIcon />
            </div>
          </div>
        </div>
        <div className={styles.wave}>
          <img src="/wave.svg" alt="" className={styles.mainWave} />
        </div>
      </div>
    </div>
  );
}
