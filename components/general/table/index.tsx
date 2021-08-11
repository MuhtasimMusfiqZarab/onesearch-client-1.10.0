import styles from './styles.module.scss';

export interface Props {
  items: any[];
}

export default function Table({ items }: Props) {
  const handleChange = () => {
    console.log('hello');
  }

  return (
    <div className={styles.table_wrap}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>
              <input type="checkbox" onChange={handleChange} name="select-all" />
            </th>
            <th className={styles.th}>Channel Name</th>
            <th className={styles.th}>Joined</th>
            <th className={styles.th}>Subscribers</th>
            <th className={styles.th}>Views</th>
            <th className={styles.th}>
              <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="11.5" width="16.5" height="14" rx="3.5" stroke="white" />
                <path d="M3.99995 10C3.66662 7 4.19995 1 8.99995 1C13.8 1 14.3333 7 14 10" stroke="white" />
              </svg>
            </th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {items.map((item, index) => (
            <tr key={index} className={styles.tr}>
              <td className={styles.th}>
                <input type="checkbox" onChange={handleChange} name="select-all" />
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
                <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="11.5" width="16.5" height="14" rx="3.5" stroke="#0CA9EF" />
                  <path d="M3.99995 10C3.66662 7 4.19995 1 8.99995 1C13.8 1 14.3333 7 14 10" stroke="#0CA9EF" />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
