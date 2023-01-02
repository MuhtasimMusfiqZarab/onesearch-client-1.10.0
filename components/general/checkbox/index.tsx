import React, { FC } from 'components/uicontainers/404/node_modules/react';
import styles from './styles.module.scss';

interface Props {}

export const Checkbox: FC<Props> = ({}: Props): any => {
  return (
    <>
      <div className={styles.container}>
        <input className={styles.input} type="checkbox" id="checkbox" />
        <label className={styles.lable} htmlFor="checkbox">
          Select All
        </label>
      </div>
    </>
  );
};
