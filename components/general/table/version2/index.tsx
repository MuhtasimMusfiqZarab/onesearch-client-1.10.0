import styles from './styles.module.scss';

export interface Props {
  items: any[];
}

export default function Table({ items }: Props) {
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Channel Name</th>
            <th className={styles.th}>Joined</th>
            <th className={styles.th}>Subscribers</th>
            <th className={styles.th}>Views</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {items.map((item, index) => (
            <tr key={index} className={styles.tr}>
              <td className={styles.td}>
                <a href="#">{item.channel_name}</a>
              </td>
              <td className={styles.td}>{item.joined}</td>
              <td className={styles.td}>{item.subscribers}</td>
              <td className={styles.td}>{item.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
