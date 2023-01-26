import React, { FC, useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { NotFoundIcon, Explaination, ForbiddenIcon } from '../../_icons';
import styles from './styles.module.scss';

export const ForbiddenAccess: FC = () => {
  return (
    <>
      <Head>
        <title>401</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.elements}>
          <ForbiddenIcon />
        </div>
      </div>
    </>
  );
};
