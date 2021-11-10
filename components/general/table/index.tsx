import React, { FC, useState } from 'react';
import Link from 'next/link';
import { Lock, DownArrow } from 'components/_icons';
import { IYoutubeChannel } from 'components/utils/interfaces';
import { Controller } from './table-controller';
import styles from './styles.module.scss';

interface Props {
  items: IYoutubeChannel[];
  headersEnums: object;
  hasController?: boolean;
  hasCheckbox?: boolean;
}

export const Table: FC<Props> = ({
  items,
  headersEnums,
  hasController = true,
  hasCheckbox = true
}: Props): JSX.Element => {
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

  return (
    <>
      {hasController && hasCheckbox && <Controller hasCheckbox={hasCheckbox} />}
      <div className={styles.table_wrap}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              {hasCheckbox && (
                <th className={styles.th}>
                  <input
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    onChange={handleSelectAll}
                    checked={isCheckAll}
                  />
                </th>
              )}

              {Object.keys(headersEnums).map((key) => (
                <th className={styles.th}>{headersEnums[key]}</th>
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
                {hasCheckbox && (
                  <td className={styles.td}>
                    <input
                      type="checkbox"
                      name={item.channel_name}
                      id={item.id}
                      onChange={handleClick}
                      checked={isCheck.includes(item.id)}
                    />
                  </td>
                )}
                {Object.keys(headersEnums).map((key) => (
                  <td className={styles.td} data-label="Joined">
                    {item[key]}
                  </td>
                ))}
                <td className={styles.td} data-label="Views">
                  <span className={styles.save_btn}>
                    <Lock />
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
