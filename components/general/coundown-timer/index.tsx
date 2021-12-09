import React, { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';

interface Props {}

const countDown = () => {
  //get difference in miliseconds
  const countDate = new Date('Jan 1, 2022 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  //calc
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  return { textDay, textHour, textMinute, textSecond };
};

export const CountdownTimer: FC<Props> = ({}: Props): any => {
  const [days, setDays] = useState<number>(null);
  const [hours, setHours] = useState<number>(null);
  const [minutes, setMinutes] = useState<number>(null);
  const [seconds, setSeconds] = useState<number>(null);

  //get the remaining time for the first time
  useEffect(() => {
    const interval = setInterval(() => {
      const { textDay, textHour, textMinute, textSecond } = countDown();
      setDays(textDay);
      setHours(textHour);
      setMinutes(textMinute);
      setSeconds(textSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.coming_soon}>
      <h2 className={styles.text}>We are launching soon!</h2>
      <div className={styles.container}>
        <div className={styles.container_day}>
          <h3 className={styles.day}>Days</h3>
          <h3>{days}</h3>
        </div>
        <div className={styles.container_hour}>
          <h3 className={styles.hour}>Hours</h3>
          <h3>{hours}</h3>
        </div>
        <div className={styles.container_minute}>
          <h3 className={styles.minute}>Minutes</h3>
          <h3>{minutes}</h3>
        </div>
        <div className={styles.container_second}>
          <h3 className={styles.second}>Seconds</h3>
          <h3>{seconds}</h3>
        </div>
      </div>
    </div>
  );
};
