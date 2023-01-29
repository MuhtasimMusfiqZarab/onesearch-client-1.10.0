import styles from './styles.module.scss';
import { ErrorIcon } from 'components/_icons';

export default function index() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ErrorIcon />
      </div>
      <div className={styles.subHeader}>
        Our website is under construction. We will be launching soon.
      </div>
    </div>
  );
}
