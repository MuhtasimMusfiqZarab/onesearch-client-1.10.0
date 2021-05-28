import React, { createContext, useContext } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import GET_ALL_CHANNELS from '../../../pages/api/query/get-channels.query.gql';

const ChannelsContext = createContext({
  channels: null,
});

function ChannelsProvider({ children }) {
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

  return (
    <ChannelsContext.Provider value={{ channels: data.getAllChannels }}>
      {children}
    </ChannelsContext.Provider>
  );
}

const useChannels = () => useContext(ChannelsContext);

export { ChannelsProvider, useChannels };
