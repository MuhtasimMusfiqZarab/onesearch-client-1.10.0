import Pagination from 'components/general/pagination';
import Table from 'components/general/table/version1';
import styles from './styles.module.scss';
import { useChannels } from 'components/_context/channels';
import { useCountires } from 'components/_context/countries';
import Dropdown from 'components/general/select-dropdown';
import Tab from 'components/general/tab';

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
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.container__table}>
          <Table items={channels} />
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
