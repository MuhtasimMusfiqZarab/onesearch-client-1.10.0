import React, { FC, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.scss";

interface Props {
  offset: number;
  setOffset: (value: number) => void;
  total: any;
}

export const Pagination: FC<Props> = ({
  offset,
  setOffset,
  total,
}): JSX.Element => {
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
            onClick={reduceOffset}
          >
            <FontAwesomeIcon icon={faAngleLeft} /> Prev
          </li>

          <li
            className={`${styles.pagination__number} ${styles.pagination__numberActive}`}
          >
            {Math.floor(offset / 10 + 1)}
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
