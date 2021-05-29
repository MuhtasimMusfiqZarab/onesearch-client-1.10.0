import React, { FC, useState, useEffect } from 'react';

import styles from './styles.module.scss';
import { useChannels } from 'components/_context/channels';

interface Props {}

const Dropdown: FC<Props> = ({}): JSX.Element => {
  const { setCategory, setOffset } = useChannels();

  const [opened, setOpened] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const categories = [
    'howto',
    'Music',
    'Entertainment',
    'People',
    'Games',
    'Travel',
    'Sports',
    'Autos',
    'Film',
    'Tech',
    'Comedy',
    'News',
    'Education',
    'Nonprofit',
    'Animals',
    'Shows',
  ];

  const handleChange = (item) => {
    setOpened(false);
    setSelectedItem(item);
    setCategory(item);
    setOffset(0);
  };

  const resetFilter = () => {
    setOpened(false);
    setSelectedItem('All');
    setCategory(null);
    setOffset(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Category</div>
      {/* Division to show the selected items */}
      <div className={styles.select_box}>
        <div
          className={`${styles.options_container} ${
            opened ? styles.active : ''
          }`}
        >
          <div className={styles.option} onClick={() => resetFilter()}>
            <input type="radio" id="film" name="category" />
            <label htmlFor="film">All</label>
          </div>

          {categories.map((element, index) => {
            return (
              <div
                className={styles.option}
                key={index}
                onClick={() => handleChange(element)}
              >
                <input type="radio" id="film" name="category" />
                <label htmlFor="film">{element}</label>
              </div>
            );
          })}
        </div>
        <div className={styles.selected} onClick={() => setOpened(!opened)}>
          {selectedItem ?? 'All'}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
