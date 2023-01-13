import styles from './styles.module.scss';

import { Loading } from 'components/general/loading';

export default function index() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Authenticating</div>
      <Loading />
    </div>
  );
}
