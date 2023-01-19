import Head from 'next/head';
import { NotFoundIcon } from '../../components/_icons';
import styles from './styles.module.scss';

export default function Index() {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.elements}>
          <NotFoundIcon />
        </div>
      </div>
    </>
  );
}
