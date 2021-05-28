import React, { FC } from 'react';
import styles from './style.module.scss';

export interface Youtube {
  id: number;
  channel_name: string;
  channel_url: string;
  description: string;
  socialblade_category: string;
  subscribers: string;
  bio_email: string;
  location: string;
}

const Table: FC<any> = ({ items }): JSX.Element => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th className={styles.th} scope="col">
            Channel Name
          </th>
          <th className={styles.th} scope="col">
            Channel URL
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index} className={styles.tr}>
            <td className={styles.td} data-label="Channel Name">
              {item.channel_name}
            </td>
            <td className={styles.td} data-label="Channel URL">
              <a href={item.channel_url}>{item.channel_url}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
