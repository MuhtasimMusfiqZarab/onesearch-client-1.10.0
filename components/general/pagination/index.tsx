import React, { FC, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.scss';

interface Props {
  offset: number;
  setOffset: (value: number) => void;
  channels: any;
}

const Pagination: FC<Props> = ({
  offset,
  setOffset,
  channels,
}): JSX.Element => {
  let count: number = 0;
  const [currentIndex, setCurrentIndex] = useState<number>();

  const reduceOffset = () => {
    if (offset > 0) {
      setOffset(offset - 1);
    }
  };

  const increaseoffset = () => {
    setOffset(offset + 1);
  };

  return (
    <div className={styles.pagination}>
      {channels && (
        <ul>
          <li
            className={`${styles.pagination__btn} ${styles.pagination__prev}`}
            onClick={reduceOffset}
          >
            <FontAwesomeIcon icon={faAngleLeft} /> Prev
          </li>

          <li
            className={`${styles.pagination__number} ${styles.pagination__numberActive}`}
          >
            {offset + 1}
          </li>

          <li
            className={`${styles.pagination__btn} ${styles.pagination__next}`}
            onClick={increaseoffset}
          >
            Next <FontAwesomeIcon icon={faAngleRight} />
          </li>
        </ul>
      )}
    </div>
  );
};

export default Pagination;
