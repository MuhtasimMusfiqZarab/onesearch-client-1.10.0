import React, { createContext, useContext, useState } from 'react';
import { useQuery } from '@apollo/client';

import GET_GOOGLE_PROFILES from '../../../../pages/api/query/google/get-google-profiles.gql';

const GoogleProfileContext = createContext({
  profiles: null,
  setOffset: (value: number) => {},
  offset: null,
  refetch: null,
  setCountry: null,
  setCategory: null,
  loading: null,
  total: null,
  searchText: null,
  setSearchText: null
});

function GoogleProfilesProvider({ children }) {
  const [country, setCountry] = useState<string>(null);
  const [category, setCategory] = useState<string>(null);

  const [searchText, setSearchText] = useState<string>(null);

  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);

  const { data, error, loading, refetch } = useQuery(GET_GOOGLE_PROFILES, {
    variables: {
      data: {
        country,
        category,
        searchText,
        limit,
        offset: offset
      }
    }
  });

  return (
    <GoogleProfileContext.Provider
      value={{
        profiles: data?.getAllGoogleProfiles?.profiles,
        setOffset,
        offset,
        refetch,
        setCountry,
        setCategory,
        loading,
        total: data?.getAllGoogleProfiles?.totalCount,
        searchText,
        setSearchText
      }}>
      {children}
    </GoogleProfileContext.Provider>
  );
}

const useGoogleProfiles = () => useContext(GoogleProfileContext);

export { GoogleProfilesProvider, useGoogleProfiles };
