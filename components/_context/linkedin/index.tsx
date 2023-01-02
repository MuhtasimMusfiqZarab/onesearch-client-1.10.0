import React, {
  createContext,
  useContext,
  useState
} from 'components/uicontainers/404/node_modules/react';
import { useQuery } from '@apollo/client';

import GET_ALL_PROFILES from '../../../pages/api/query/linkedin/get-all-profiles.gql';

const LinkedinProfilesContext = createContext({
  profiles: null,
  setOffset: (value: number) => {},
  offset: null,
  refetch: null,
  setTitle: null,
  setLocation: null,
  setCompany: null,
  loading: null,
  total: null,
  searchText: null,
  setSearchText: null
});

function LinkedinProfilesProvider({ children }) {
  const [title, setTitle] = useState<string>(null);
  const [location, setLocation] = useState<string>(null);
  const [company, setCompany] = useState<string>(null);
  const [searchText, setSearchText] = useState<string>(null);

  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);

  const { data, error, loading, refetch } = useQuery(GET_ALL_PROFILES, {
    variables: {
      data: {
        title,
        location,
        company,
        searchText,
        limit,
        offset: offset
      }
    }
  });

  return (
    <LinkedinProfilesContext.Provider
      value={{
        profiles: data?.getLinkedinProfiles?.profiles,
        setOffset,
        offset,
        refetch,
        setTitle,
        setLocation,
        setCompany,
        loading,
        total: data?.getLinkedinProfiles?.totalCount,
        searchText,
        setSearchText
      }}>
      {children}
    </LinkedinProfilesContext.Provider>
  );
}

const useLinkedinProfiles = () => useContext(LinkedinProfilesContext);

export { LinkedinProfilesProvider, useLinkedinProfiles };
