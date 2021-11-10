import React, { FC, useState } from 'react';
import Link from 'next/link';
import { Lock, DownArrow } from 'components/_icons';
import { Controller } from './table-controller';
import styles from './styles.module.scss';

import { YoutubeTableEnum } from 'components/utils/enum';

export interface Props {
  items: any[];
}

export const Table: FC<Props> = ({ items }: Props): JSX.Element => {
  let [toggleBtn, setToggleBtn] = useState(false);

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(items.map((item) => item.id));

    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, parseInt(id)]);

    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== parseInt(id)));
    }
  };

  const handleToggleBtn = () => {
    setToggleBtn((toggleBtn = !toggleBtn));
  };

  const generateHeaders = () => {
    for (let header in YoutubeTableEnum) {
      return <th className={styles.th}>{header}</th>;
    }
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
                  name="selectAll"
                  id="selectAll"
                  onChange={handleSelectAll}
                  checked={isCheckAll}
                />
              </th>

              {Object.keys(YoutubeTableEnum).map((key) => (
                <th className={styles.th}>{YoutubeTableEnum[key]}</th>
              ))}
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
                className={`${styles.tr} ${toggleBtn ? styles.expand : ''} ${
                  isCheck.includes(item.id) ? styles.active_row : ''
                }`}>
                <td className={styles.td}>
                  <input
                    type="checkbox"
                    name={item.channel_name}
                    id={item.id}
                    onChange={handleClick}
                    checked={isCheck.includes(item.id)}
                  />
                </td>
                <td className={styles.td} data-label="Channel Name">
                  <Link href={`/dashboard/search/youtube/${item.id}`}>
                    <a>{item.channel_name}</a>
                  </Link>
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
                  <span className={styles.save_btn}>
                    <Lock color="#49789b" />
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
