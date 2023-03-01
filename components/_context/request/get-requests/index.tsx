import React, { createContext, useContext, useState } from 'react';
import { useQuery } from '@apollo/client';

import GET_ALL_REQUESTS from '../../../../pages/api/query/request/get-all-requests.gql';

const GetAllRequestsContext = createContext({
  getAllRequests: null,
  loading: null
});

function GetAllRequestsProvider({ children }) {
  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);

  const { data, error, loading } = useQuery(GET_ALL_REQUESTS, {
    variables: {
      data: {
        limit,
        offset
      }
    }
  });

  return (
    <GetAllRequestsContext.Provider
      value={{
        getAllRequests: data?.getAllRequests,
        loading
      }}>
      {children}
    </GetAllRequestsContext.Provider>
  );
}

const useAllRequests = () => useContext(GetAllRequestsContext);

export { GetAllRequestsProvider, useAllRequests };
