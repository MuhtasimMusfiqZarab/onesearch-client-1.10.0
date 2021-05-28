import { useEffect } from 'react';

import Table from '../../components/general/table';
import Pagination from '../../components/general/pagination';

import { useQuery } from '@apollo/client';
import GET_ALL_CHANNELS from '../../pages/api/query/get-channels.query.gql';

import styles from './styles.module.scss';

export default function YoutubeTable() {
  const { data, error, loading, refetch } = useQuery(GET_ALL_CHANNELS, {
    variables: {
      data: {
        socialblade_category: 'Music',
        location: 'Bangladesh',
        limit: 5,
        offset: 0,
      },
    },
  });
  console.log('This is the data found', data);

  return (
    <div className={styles.container}>
      <div className={styles.container__filters}>Filters</div>
      {/* <div>
        {channels.channels.length > 0 && <Table items={channels.channels} />}
      </div> */}
      <div className={styles.container__pagination}>
        <Pagination />
      </div>
    </div>
  );
}
