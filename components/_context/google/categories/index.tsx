import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/client';

import GET_GOOGLE_CATEGORIES from '../../../../pages/api/query/google/get-google-categories.gql';

const GoogleCategoriesContext = createContext({
  categories: null
});

function GoogleCategoriesProvider({ children }) {
  const { data, error, loading } = useQuery(GET_GOOGLE_CATEGORIES);

  return (
    <GoogleCategoriesContext.Provider
      value={{
        categories: data?.getGoogleCategories?.categories
      }}>
      {children}
    </GoogleCategoriesContext.Provider>
  );
}

const useGoogleCategories = () => useContext(GoogleCategoriesContext);

export { GoogleCategoriesProvider, useGoogleCategories };
