import styles from "./styles.module.scss";

export default function index() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Coming Soon</div>
      <div className={styles.subHeader}>
        Our website is under construction. We will be launching soon.
      </div>
    </div>
  );
}
