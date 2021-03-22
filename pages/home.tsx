import { Button } from 'reactstrap';

import { useDispatch } from 'react-redux';

import Pricing from '../components/widgets/pricing';
import { useEffect } from 'react';
import { fetchPosts } from '../store/actions/postAction';

import Table from '../components/widgets/table';
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
        {channels.channels.length > 0 && <Table posts={channels.channels} />}
      </div>
    </>
  );
}
