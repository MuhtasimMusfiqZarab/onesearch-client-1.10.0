import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from '../store/actions/postAction';

import { Youtube } from '../components/icons/youtube';

import Table from '../components/general/table';
import ArgonTable from '../components/argon/table';
import { useSelector } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const channels = useSelector((state: any) => state.channels);

  return (
    <>
      <div>
        <button className="btn">
          <Youtube width={50} height={50} color="#e53935" />
        </button>
        <ArgonTable />
        {channels.channels.length > 0 && <Table items={channels.channels} />}
      </div>
    </>
  );
}
