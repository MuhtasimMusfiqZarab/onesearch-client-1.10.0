import React, { FC } from "react";
import { Lock } from "components/_icons";
import styles from "./styles.module.scss";

export interface Props {
  items: any[];
}

export const Table: FC<Props> = ({ items }: Props): JSX.Element => {
  const handleChange = () => {
    console.log("hello");
  };

  return (
    <div className={styles.table_wrap}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}></th>
            <th className={styles.th}>Channel Name</th>
            <th className={styles.th}>Joined</th>
            <th className={styles.th}>Subscribers</th>
            <th className={styles.th}>Views</th>
            <th className={styles.th}>
              <Lock color="#ffffff" />
            </th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {items.map((item, index) => (
            <tr key={index} className={styles.tr}>
              <td className={styles.th}>
                <input
                  type="checkbox"
                  onChange={handleChange}
                  name="select-all"
                />
              </td>
              <td className={styles.td} data-label="Channel Name">
                <a href="#">{item.channel_name}</a>
              </td>
              <td className={styles.td} data-label="Joined">
                {item.joined}
              </td>
              <td className={styles.td} data-label="Subscribers">
                {item.subscribers}
              </td>
              <td className={styles.td} data-label="Views">
                {item.views}
              </td>
              <td className={styles.td} data-label="Views">
                <Lock color="#005B96" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
