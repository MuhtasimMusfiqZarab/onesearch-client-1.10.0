import React, { FC, useState, useRef, useEffect } from 'components/uicontainers/404';
import styles from './styles.module.scss';

interface Props {
  iconPrimary?: any;
  iconSecondary?: any;
}

export const Switch: FC<Props> = ({ iconPrimary, iconSecondary }: Props): JSX.Element => {
  return (
    <div className="switch-container">
      <input type="checkbox" id="switch" />
      <div className="switch-color"></div>

      <label htmlFor="switch"></label>
    </div>
  );
};
