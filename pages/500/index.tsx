import Head from 'next/head';
import ServerErrorPage from 'components/uicontainers/500';
import styles from './styles.module.scss';

export default function Index() {
  return (
    <>
      <Head>
        <title>500</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.elements}>
          <ServerErrorPage />
        </div>
      </div>
    </>
  );
}
