import React, { createContext, useContext, useState } from 'components/uicontainers/404';
import { useQuery } from '@apollo/client';

import GET_USERS from '../../../../pages/api/query/user/get-users.gql';

const GetAllUsersContext = createContext({
  getAllUsers: null,
  loading: null,
  setLocation: null
});

function GetAllUsersProvider({ children }) {
  const [location, setLocation] = useState<string>(null);
  const [searchText, setSearchText] = useState<string>(null);
  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);

  const { data, error, loading } = useQuery(GET_USERS, {
    variables: {
      data: {
        location: location,
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
        setLocation
      }}>
      {children}
    </GetAllUsersContext.Provider>
  );
}

const useAllUsers = () => useContext(GetAllUsersContext);

export { GetAllUsersProvider, useAllUsers };
