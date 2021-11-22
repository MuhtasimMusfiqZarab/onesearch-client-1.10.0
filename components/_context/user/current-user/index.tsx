import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/client';

import GET_CURRENT_USER from '../../../../pages/api/query/user/get-current-user.gql';

const CurrentUserContext = createContext({
  currentUser: null,
  loading: null
});

function CurrentUserProvider({ children }) {
  const { data, error, loading } = useQuery(GET_CURRENT_USER);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser: data?.currentUser,
        loading
      }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

const useCurrentUser = () => useContext(CurrentUserContext);

export { CurrentUserProvider, useCurrentUser };
