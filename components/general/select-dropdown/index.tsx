import React, { FC, useState, useEffect } from 'react';

import styles from './styles.module.scss';
import { useChannels } from 'components/_context/channels';

interface Props {
  title: string;
  items: string[];
  setItem: any;
  setOffset?: any;
}

const Dropdown: FC<Props> = ({
  title,
  items,
  setItem,
  setOffset,
}: Props): JSX.Element => {
  const [opened, setOpened] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>('All');

  const handleChange = (item) => {
    setOpened(false);
    setSelectedItem(item);
    setItem(item);
    setOffset(0);
  };

  const resetFilter = () => {
    setOpened(false);
    setSelectedItem('All');
    setItem(null);
    setOffset(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {/* Division to show the selected items */}
      <div className={styles.select_box}>
        <div
          className={`${styles.options_container} ${
            opened ? styles.active : ''
          }`}
        >
          <div className={styles.option} onClick={() => resetFilter()}>
            <input type="radio" name="category" />
            <label>All</label>
          </div>

          {items.map((element, index) => {
            return (
              <div
                className={styles.option}
                key={index}
                onClick={() => handleChange(element)}
              >
                <input type="radio" name="category" />
                <label>{element}</label>
              </div>
            );
          })}
        </div>
        <div className={styles.selected} onClick={() => setOpened(!opened)}>
          {selectedItem}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
