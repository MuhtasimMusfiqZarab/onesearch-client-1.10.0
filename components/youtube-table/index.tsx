import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getChannels } from '../../store/actions/get-channels';

import Table from '../../components/general/table';
import Pagination from '../../components/general/pagination';
import { useSelector } from 'react-redux';

import styles from './styles.module.scss';

export default function YoutubeTable() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannels());
  }, []);

  const channels = useSelector((state: any) => state.channels);

  return (
    <div className={styles.container}>
      <div className={styles.container__filters}>Filters</div>
      <div>
        {channels.channels.length > 0 && <Table items={channels.channels} />}
      </div>
      <div className={styles.container__pagination}>
        <Pagination />
      </div>
    </div>
  );
}
