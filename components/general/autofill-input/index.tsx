import React, { useState } from 'components/uicontainers/404';
import styles from './styles.module.scss';

function AutofillInput({ label, items }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchItems, setSearchItems] = useState([]);

  const handleOnChange = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setSearchTerm(e.target.value);

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
          value={searchTerm}
          onChange={handleOnChange}
        />

        {searchItems.length > 0 ? (
          <ul className={styles.autofill__items}>
            {searchItems.map((item, index) => (
              <li
                onClick={() => {
                  setSearchTerm(item);
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
