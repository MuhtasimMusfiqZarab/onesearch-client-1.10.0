import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/client';

import GET_CHANNEL_CATEGORIES from '../../../../pages/api/query/youtube/get-channel-categories.gql';

const GoogleCategoriesContext = createContext({
  categories: null
});

function GoogleCategoriesProvider({ children }) {
  const { data, error, loading } = useQuery(GET_CHANNEL_CATEGORIES);

  return (
    <GoogleCategoriesContext.Provider
      value={{
        categories: data?.getAllCategories?.categories
      }}>
      {children}
    </GoogleCategoriesContext.Provider>
  );
}

const useCategories = () => useContext(GoogleCategoriesContext);

export { GoogleCategoriesProvider, useCategories };
