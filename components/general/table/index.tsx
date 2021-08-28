import React, { FC, useState } from "react";
import { Lock, Save, DownloadsIcon, DownArrow } from "components/_icons";
import { Controller } from "./table-controller";
import styles from "./styles.module.scss";

export interface Props {
  items: any[];
}

export const Table: FC<Props> = ({ items }: Props): JSX.Element => {
  let [toggleBtn, setToggleBtn] = useState(false);
  const arrowColor = '#5D8AA8'

  const handleChange = () => {
    console.log("testing...");
  };

  const handleToggleBtn = () => {
    setToggleBtn((toggleBtn = !toggleBtn));
  };


  return (
    <>
      <Controller />
      <div className={styles.table_wrap}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th className={styles.th}>
                <input
                  type="checkbox"
                  onChange={handleChange}
                  name="select-all"
                />
              </th>
              <th className={styles.th}>Channel Name</th>
              <th className={styles.th}>Joined</th>
              <th className={styles.th}>Subscribers</th>
              <th className={styles.th}>Views</th>
              <th className={styles.th}>
                <Lock color="#ffffff" />
                <span></span>
              </th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {items.map((item, index) => (
              <tr
                key={index}
                className={`${styles.tr} ${toggleBtn ? styles.expand : ''}`}
              >
                <td className={styles.td}>
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
                  <span className={styles.lock_btn}>
                    <Lock color="#005B96" />
                  </span>

                  <span className={styles.save_btn}>
                    <Save color={arrowColor} />
                  </span>

                  <span className={styles.download_btn}>
                    <DownloadsIcon color={arrowColor} />
                  </span>

                  <span onClick={handleToggleBtn} className={styles.toggle_btn}>
                    {toggleBtn ? 'Show less' : 'Expand'}
                    <DownArrow />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
