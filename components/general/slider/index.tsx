import React, { FC } from 'react';
import styles from './style.module.scss';

interface Props {
  minValue?: number;
  maxValue?: number;
  currentValue?: number;
}

export const Slider: FC<Props> = ({ minValue, maxValue, currentValue }: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Subscribers</div>
        <div className={styles.slider_track}></div>
        <input type="range" min={minValue} max={maxValue} value="30" id="slider-1" />
        <input type="range" min={minValue} max={maxValue} value="70" id="slider-2" />
      </div>
    </div>
  );
};
