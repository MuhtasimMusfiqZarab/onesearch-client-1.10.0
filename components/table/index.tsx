import styles from './styles.module.scss';

export interface Props {
  items: any[];
}

export default function Table({ items }: Props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Channel Name</th>
            <th>Joined</th>
            <th>Subscribers</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <a href="#">{item.channel_name}</a>
              </td>
              <td>{item.joined}</td>
              <td>{item.subscribers}</td>
              <td>{item.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
