import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/client';

import GET_REQUEST_CATEGORIES from '../../../../pages/api/query/request/get-request-categories.gql';

const RequestCategoriesContext = createContext({
  categories: null
});

function RequestCategoriesProvider({ children }) {
  const { data, error, loading } = useQuery(GET_REQUEST_CATEGORIES);

  return (
    <RequestCategoriesContext.Provider
      value={{
        categories: data?.getRequestCategories?.categories
      }}>
      {children}
    </RequestCategoriesContext.Provider>
  );
}

const useRequestCategories = () => useContext(RequestCategoriesContext);

export { RequestCategoriesProvider, useRequestCategories };
