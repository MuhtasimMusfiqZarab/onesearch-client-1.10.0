import React, { FC } from 'react';
import styles from './style.module.scss';

export interface TableProps {}

const Table: FC<TableProps> = (): JSX.Element => {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>Statement Summary</caption>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th className={styles.th} scope="col">
            Account
          </th>
          <th className={styles.th} scope="col">
            Due Date
          </th>
          <th className={styles.th} scope="col">
            Amount
          </th>
          <th className={styles.th} scope="col">
            Period
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.tr}>
          <td className={styles.td} data-label="Account">
            Visa - 3412
          </td>
          <td className={styles.td} data-label="Due Date">
            04/01/2016
          </td>
          <td className={styles.td} data-label="Amount">
            $1,190
          </td>
          <td className={styles.td} data-label="Period">
            03/01/2016 - 03/31/2016
          </td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.td} scope="row" data-label="Account">
            Visa - 6076
          </td>
          <td className={styles.td} data-label="Due Date">
            03/01/2016
          </td>
          <td className={styles.td} data-label="Amount">
            $2,443
          </td>
          <td className={styles.td} data-label="Period">
            02/01/2016 - 02/29/2016
          </td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.td} scope="row" data-label="Account">
            Corporate AMEX
          </td>
          <td className={styles.td} data-label="Due Date">
            03/01/2016
          </td>
          <td className={styles.td} data-label="Amount">
            $1,181
          </td>
          <td className={styles.td} data-label="Period">
            02/01/2016 - 02/29/2016
          </td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.td} scope="row" data-label="Acount">
            Visa - 3412
          </td>
          <td className={styles.td} data-label="Due Date">
            02/01/2016
          </td>
          <td className={styles.td} data-label="Amount">
            $842
          </td>
          <td className={styles.td} data-label="Period">
            01/01/2016 - 01/31/2016
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
