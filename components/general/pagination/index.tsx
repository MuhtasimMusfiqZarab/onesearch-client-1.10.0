import React, { FC, useState, useEffect } from 'react';
import styles from './style.module.scss';
import { ArrowLeft, ArrowRight } from 'components/_icons';

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
    if (totalPages > offset + 1) {
      setOffset(offset + 10);
    }
  };

  return (
    <div className={styles.pagination}>
      {total && (
        <ul>
          <li
            className={`${styles.pagination__btn} ${styles.pagination__prev}`}
            onClick={reduceOffset}>
            <ArrowLeft color="#49789b" />
            Prev
          </li>

          <li className={`${styles.pagination__number} ${styles.pagination__numberActive}`}>
            {Math.floor(offset / 10 + 1)}
          </li>
          <li
            className={`${styles.pagination__btn} ${styles.pagination__next}`}
            onClick={increaseoffset}>
            Next
            <ArrowRight color="#49789b" />
          </li>
        </ul>
      )}
    </div>
  );
};
