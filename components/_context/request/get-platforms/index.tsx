import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/client';

import GET_REQUEST_PLATFORMS from '../../../../pages/api/query/request/get-request-platforms.gql';

const RequestPlatformsContext = createContext({
  platforms: null
});

function RequestPlatformsProvider({ children }) {
  const { data, error, loading } = useQuery(GET_REQUEST_PLATFORMS);

  return (
    <RequestPlatformsContext.Provider
      value={{
        platforms: data?.getRequestPlatforms?.platforms
      }}>
      {children}
    </RequestPlatformsContext.Provider>
  );
}

const useRequestPlatforms = () => useContext(RequestPlatformsContext);

export { RequestPlatformsProvider, useRequestPlatforms };
