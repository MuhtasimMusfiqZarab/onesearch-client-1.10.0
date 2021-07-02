import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Props {}

const index: FC<Props> = ({}: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.loading}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
};

export default index;
