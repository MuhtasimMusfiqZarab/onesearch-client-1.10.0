import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/client';

import GET_REQUEST_STATUSES from '../../../../pages/api/query/request/get-request-status.gql';

const RequestStatusesContext = createContext({
  statuses: null
});

function RequestStatusesProvider({ children }) {
  const { data, error, loading } = useQuery(GET_REQUEST_STATUSES);

  return (
    <RequestStatusesContext.Provider
      value={{
        statuses: data?.getRequestStatuses?.statuses
      }}>
      {children}
    </RequestStatusesContext.Provider>
  );
}

const useRequestStatuses = () => useContext(RequestStatusesContext);

export { RequestStatusesProvider, useRequestStatuses };
