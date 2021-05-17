import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.scss';

const Pagination: FC<any> = ({ items }): JSX.Element => {
  return (
    <div className={styles.pagination}>
      <ul>
        <li className={`${styles.pagination__btn} ${styles.pagination__prev}`}>
          <FontAwesomeIcon icon={faAngleLeft} /> Prev
        </li>

        <li
          className={`${styles.pagination__number} ${styles.pagination__numberActive}`}
        >
          1
        </li>
        <li className={styles.pagination__number}>2</li>
        <li className={styles.pagination__dots}>...</li>
        <li className={styles.pagination__number}>4</li>
        <li className={styles.pagination__number}>5</li>
        <li className={styles.pagination__dots}>...</li>
        <li className={styles.pagination__number}>7</li>

        <li className={`${styles.pagination__btn} ${styles.pagination__next}`}>
          Next <FontAwesomeIcon icon={faAngleRight} />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
