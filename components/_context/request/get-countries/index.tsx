import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/client';

import GET_REQUEST_COUNTRIES from '../../../../pages/api/query/request/get-request-countries.gql';

const RequestCountriesContext = createContext({
  countries: null
});

function RequestCountriesProvider({ children }) {
  const { data, error, loading } = useQuery(GET_REQUEST_COUNTRIES);

  return (
    <RequestCountriesContext.Provider
      value={{
        countries: data?.getRequestCountries?.countries
      }}>
      {children}
    </RequestCountriesContext.Provider>
  );
}

const useRequestCountries = () => useContext(RequestCountriesContext);

export { RequestCountriesProvider, useRequestCountries };
