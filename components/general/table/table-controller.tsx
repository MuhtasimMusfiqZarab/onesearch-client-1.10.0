import React, { FC, useState } from 'react';
import { Save, Lock, DownloadsIcon } from 'components/_icons';
import styles from './styles.module.scss';

interface Props {
  hasCheckbox?: boolean;
}

export const Controller: FC<Props> = ({ hasCheckbox = true }: Props): JSX.Element => {
  let iconColor = '#8F8F8F';

  return (
    <div className={styles.table_controllers}>
      {hasCheckbox && (
        <div className={styles.select_all}>
          <input
            type="checkbox"
            // onChange={handleChange}
            name="select-all"
            id="select_all"
          />
        </div>
      )}

      <div className={styles.controller_list}>
        <a href="#" className={styles.wishlist}>
          <Save color={iconColor} />
          <span>Save in Wishlist</span>
        </a>
        <a href="#" className={styles.unlock}>
          <Lock color={iconColor} />
          <span>Unlock</span>
        </a>
        <a href="#" className={styles.download}>
          <DownloadsIcon color={iconColor} />
          <span>Download</span>
        </a>
      </div>
    </div>
  );
};
