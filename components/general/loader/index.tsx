import React, { FC } from 'components/uicontainers/404/node_modules/react';
import styles from './styles.module.scss';

interface Props {
  isTextBox?: boolean;
  isActionButton?: boolean;
}

export const Loader: FC<Props> = ({ isTextBox, isActionButton }: Props): any => {
  return (
    <>
      {isTextBox && <div className={`${styles.skeleton} ${styles.skeleton_text}`} />}
      {isActionButton && <div className={`${styles.skeleton} ${styles.skeleton_checkbox}`} />}
    </>
  );
};
