import React, { FC, useState, useEffect } from 'react';
import styles from './style.module.scss';

interface Props {
  offset: number;
  setOffset: (value: number) => void;
  total: any;
}

export const Pagination: FC<Props> = ({ offset, setOffset, total }): JSX.Element => {
  const [totalPages, setTotalPages] = useState<number>(null);

  useEffect(() => {
    if (total > 0) {
      let count = Math.floor(total / 10);
      if (total % 10) {
        count++;
      }
      setTotalPages(count);
    }
  }, [total]);

  const goToFirst = () => {};

  const goToLast = () => {};

  const reduceOffset = () => {
    if (offset > 0) {
      setOffset(offset - 10);
    }
  };

  const increaseoffset = () => {
    setOffset(offset + 10);
  };

  return (
    <div className={styles.pagination}>
      {total && (
        <ul>
          <li
            className={`${styles.pagination__btn} ${styles.pagination__prev}`}
            onClick={reduceOffset}>
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 13.9203L1.74407 7.49988L8 1.07972L7.30752 0L0 7.49988L7.30752 15L8 13.9203Z"
                fill="#49789B"
              />
            </svg>
            Prev
          </li>

          <li className={`${styles.pagination__number} ${styles.pagination__numberActive}`}>
            {Math.floor(offset / 10 + 1)}
          </li>
          <li
            className={`${styles.pagination__btn} ${styles.pagination__next}`}
            onClick={increaseoffset}>
            Next{' '}
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M-1.21695e-06 1.07973L6.25593 7.50012L-9.43925e-08 13.9203L0.692485 15L8 7.50012L0.692484 6.38843e-07L-1.21695e-06 1.07973Z"
                fill="#49789B"
              />
            </svg>
          </li>
        </ul>
      )}
    </div>
  );
};
