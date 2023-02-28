import React, { FC } from 'react';
import { NotFoundIcon, Explaination } from '../../_icons';
import styles from './styles.module.scss';

export const NotFound: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.elements}>
          <NotFoundIcon />
          <Explaination />
        </div>
      </div>
    </>
  );
};
