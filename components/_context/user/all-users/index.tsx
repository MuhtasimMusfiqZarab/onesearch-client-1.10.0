import React, { createContext, useContext, useState } from 'react';
import { useQuery } from '@apollo/client';

import GET_USERS from '../../../../pages/api/query/user/get-users.gql';

const GetAllUsersContext = createContext({
  getAllUsers: null,
  total: null,
  loading: null,
  offset: null,
  setOffset: (value: number) => {},
  refetch: null,
  searchText: null,
  setSearchText: null,
  setAccessRole: null,
  accessRole: null
});

function GetAllUsersProvider({ children }) {
  const [searchText, setSearchText] = useState<string>(null);
  const [accessRole, setAccessRole] = useState<string>(null);
  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);

  const { data, error, loading, refetch } = useQuery(GET_USERS, {
    variables: {
      data: {
        accessRole: accessRole,
        searchText,
        limit,
        offset: offset
      }
    }
  });

  return (
    <GetAllUsersContext.Provider
      value={{
        getAllUsers: data?.getAllUsers,
        loading,
        setOffset,
        offset,
        refetch,
        total: data?.getAllUsers?.totalCount,
        searchText,
        setSearchText,
        setAccessRole,
        accessRole
      }}>
      {children}
    </GetAllUsersContext.Provider>
  );
}

const useAllUsers = () => useContext(GetAllUsersContext);

export { GetAllUsersProvider, useAllUsers };
