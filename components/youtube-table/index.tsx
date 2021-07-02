import Pagination from 'components/general/pagination';
import Table from 'components/general/table/version2';
import styles from './styles.module.scss';
import { useChannels } from 'components/_context/channels';
import { useCountires } from 'components/_context/countries';
import Dropdown from 'components/general/select-dropdown';
import Tab from 'components/general/tab';
import SearchBox from 'components/general/searchbox';

export default function YoutubeTable() {
  const {
    channels,
    setOffset,
    setCategory,
    offset,
    setLocation,
  } = useChannels();
  const { countries } = useCountires();
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

  return (
    <>
      <div className={styles.filterContainer}>
        <Tab />
        <div className={styles.filterItems}>
          <Dropdown
            title="Category"
            setItem={setCategory}
            setOffset={setOffset}
            items={categories}
          />
          <Dropdown
            title="Countries"
            setItem={setLocation}
            setOffset={setOffset}
            items={countries}
          />
          <SearchBox />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.container__table}>
          {channels?.length > 0 && <Table items={channels} />}
          {channels?.length === 0 && <div>No Data Found</div>}
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
