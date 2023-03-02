import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/client';

import GET_LINKEDIN_LOCATIONS from '../../../../pages/api/query/linkedin/get-linkedin-locations.gql';

const LocationsContext = createContext({
  locations: null
});

function LocationsProvider({ children }) {
  const { data, error, loading } = useQuery(GET_LINKEDIN_LOCATIONS);

  return (
    <LocationsContext.Provider
      value={{
        locations: data?.getLinkedinLocations?.locations
      }}>
      {children}
    </LocationsContext.Provider>
  );
}

const useLinkedinLocations = () => useContext(LocationsContext);

export { LocationsProvider, useLinkedinLocations };
