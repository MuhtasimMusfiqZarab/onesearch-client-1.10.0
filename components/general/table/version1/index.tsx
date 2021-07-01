import React, { FC } from 'react';
import styles from './style.module.scss';

export interface Youtube {
  id: number;
  channel_name: string;
  joined: string;
  views: string;
  subscribers: string;
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
            Joined
          </th>
          <th className={styles.th} scope="col">
            Views
          </th>
          <th className={styles.th} scope="col">
            Subscribers
          </th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => (
          <tr key={index} className={styles.tr}>
            <td className={styles.td} data-label="Channel Name">
              {item.channel_name}
            </td>
            <td className={styles.td} data-label="Joined">
              <a href={item.channel_url}>{item.joined}</a>
            </td>
            <td className={styles.td} data-label="Views">
              <a href={item.channel_url}>{item.views}</a>
            </td>
            <td className={styles.td} data-label="Subscribers">
              <a href={item.channel_url}>{item.subscribers}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
