import Table from 'components/general/table';
import Pagination from 'components/general/pagination';

import styles from './styles.module.scss';
import { useChannels } from 'components/_context/channels';

export default function YoutubeTable() {
  const { channels, offset, setOffset } = useChannels();

  return (
    <div className={styles.container}>
      <div className={styles.container__filters}>Filters</div>
      <div>{channels?.length > 0 && <Table items={channels} />}</div>
      <div className={styles.container__pagination}>
        <Pagination channels={channels} setOffset={setOffset} offset={offset} />
      </div>
    </div>
  );
}
