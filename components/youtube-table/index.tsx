import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getChannels } from '../../store/actions/get-channels';

import Table from '../general/table';
import { useSelector } from 'react-redux';

export default function YoutubeTable() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannels());
  }, []);

  const channels = useSelector((state: any) => state.channels);

  return (
    <>
      <div>Searching</div>
      <div>
        {channels.channels.length > 0 && <Table items={channels.channels} />}
      </div>
    </>
  );
}
