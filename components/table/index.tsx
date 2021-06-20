import styles from './styles.module.scss';

export default function Table() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Channel Name</th>
            <th>Joined</th>
            <th>Subscribers</th>
            <th>Status</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="#">Lonely army</a>
            </td>
            <td>18th Dec</td>
            <td>123</td>
            <td>
              <p className="status status-pending">unpaid</p>
            </td>
            <td className="amount">18th Dec</td>
          </tr>
          <tr>
            <td>
              <a href="#">Lonely army</a>
            </td>
            <td>18th Dec</td>
            <td>123</td>
            <td>
              <p className="status status-unpaid">unpaid</p>
            </td>
            <td className="amount">18th Dec</td>
          </tr>
          <tr>
            <td>
              <a href="#">Lonely army</a>
            </td>
            <td>18th Dec</td>
            <td>123</td>
            <td>
              <p className="status status-paid">unpaid</p>
            </td>
            <td className="amount">18th Dec</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
