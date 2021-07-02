import React, { createContext, useContext, useState } from 'react';
import { useQuery } from '@apollo/client';

import GET_ALL_CHANNELS from '../../../pages/api/query/get-channels.query.gql';

const ChannelsContext = createContext({
  channels: null,
  setOffset: (value: number) => {},
  offset: null,
  refetch: null,
  setCategory: null,
  setLocation: null,
  loading: null,
  total: null,
});

function ChannelsProvider({ children }) {
  const [category, setCategory] = useState<string>(null);
  const [location, setLocation] = useState<string>(null);

  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);

  const { data, error, loading, refetch } = useQuery(GET_ALL_CHANNELS, {
    variables: {
      data: {
        socialblade_category: category,
        location: location,
        limit,
        offset: offset,
      },
    },
  });

  return (
    <ChannelsContext.Provider
      value={{
        channels: data?.getAllChannels?.channels,
        setOffset,
        offset,
        refetch,
        setCategory,
        setLocation,
        loading,
        total: data?.getAllChannels?.totalCount,
      }}
    >
      {children}
    </ChannelsContext.Provider>
  );
}

const useChannels = () => useContext(ChannelsContext);

export { ChannelsProvider, useChannels };
