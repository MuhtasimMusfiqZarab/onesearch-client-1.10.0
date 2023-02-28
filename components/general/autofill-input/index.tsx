import React, { useState } from 'react';
import styles from './styles.module.scss';

function AutofillInput({ label, items, setItem, item }) {
  const [searchItems, setSearchItems] = useState([]);

  const handleOnChange = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setItem(e.target.value);

    if (searchQuery !== '') {
      setSearchItems(items.filter((item) => item.toLowerCase().startsWith(searchQuery)));
    } else {
      setSearchItems([]);
    }
  };

  return (
    <>
      <div className={styles.autofill}>
        <label htmlFor={label.toLowerCase()}>{label}</label>
        <input
          type="text"
          className={styles.autofill__input}
          placeholder={label}
          id={label.toLowerCase()}
          value={item}
          onChange={handleOnChange}
        />

        {searchItems.length > 0 ? (
          <ul className={styles.autofill__items}>
            {searchItems.map((item, index) => (
              <li
                onClick={() => {
                  setItem(item);
                  setSearchItems([]);
                }}
                key={index}>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default AutofillInput;
