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
        <input type="range" min={minValue} max={maxValue} value={currentValue} id="slider-1" />
      </div>
    </div>
  );
};
