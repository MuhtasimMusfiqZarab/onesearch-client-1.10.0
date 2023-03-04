import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/client';

import GET_GOOGLE_COUNTRIES from '../../../../pages/api/query/google/get-google-countries.gql';

const GoogleCountriesContext = createContext({
  countries: null
});

function GoogleCountriesProvider({ children }) {
  const { data, error, loading } = useQuery(GET_GOOGLE_COUNTRIES);

  return (
    <GoogleCountriesContext.Provider
      value={{
        countries: data?.getGoogleCountries?.countries
      }}>
      {children}
    </GoogleCountriesContext.Provider>
  );
}

const useGoogleCountries = () => useContext(GoogleCountriesContext);

export { GoogleCountriesProvider, useGoogleCountries };
