import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getChannels } from '../store/actions/get-channels';

import Table from '../components/general/table';
import { useSelector } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannels());
  }, []);

  const channels = useSelector((state: any) => state.channels);

  return (
    <>
      <div>
        {channels.channels.length > 0 && <Table items={channels.channels} />}
      </div>
    </>
  );
}
