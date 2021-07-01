import Pagination from 'components/general/pagination';
import Table from 'components/general/table/version1';
import styles from './styles.module.scss';
import { useChannels } from 'components/_context/channels';
import Dropdown from 'components/general/select-dropdown';
import Tab from 'components/general/tab';

export default function YoutubeTable() {
  const { channels, offset, setOffset } = useChannels();

  return (
    <>
      <div className={styles.filterContainer}>
        <Tab />
        <div className={styles.filterItems}>
          <Dropdown />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.container__table}>
          {channels?.length > 0 && <Table items={channels} />}
        </div>
        <div className={styles.container__pagination}>
          <Pagination
            channels={channels}
            setOffset={setOffset}
            offset={offset}
          />
        </div>
      </div>
    </>
  );
}
