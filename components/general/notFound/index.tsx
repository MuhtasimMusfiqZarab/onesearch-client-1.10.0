import React, { FC, useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { NotFoundIcon, Explaination } from '../../_icons';
import styles from './styles.module.scss';

export const NotFound: FC = () => {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.elements}>
          <NotFoundIcon />
          <Explaination />
        </div>
      </div>
    </>
  );
};
