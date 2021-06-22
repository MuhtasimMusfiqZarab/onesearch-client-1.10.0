// import Table from 'components/general/table';
import Pagination from 'components/general/pagination';
import Table from 'components/table';

import styles from './styles.module.scss';
import { useChannels } from 'components/_context/channels';
import Dropdown from 'components/general/select-dropdown';
import Tab from 'components/general/tab';

export default function YoutubeTable() {
  const { channels, offset, setOffset } = useChannels();

  return (
    <div className={styles.container}>
      <Tab />
      <div className={styles.container__filters}>
        {channels?.length > 0 && <Dropdown />}
      </div>
      <div className={styles.container__table}>
        {channels?.length > 0 && <Table items={channels} />}
      </div>
      <div className={styles.container__pagination}>
        <Pagination channels={channels} setOffset={setOffset} offset={offset} />
      </div>
    </div>
  );
}
