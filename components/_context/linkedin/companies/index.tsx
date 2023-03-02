import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/client';

import GET_LINKEDIN_COMPANIES from '../../../../pages/api/query/linkedin/get-linkedin-companies.gql';

const LinkedinCompaniesContext = createContext({
  companies: null
});

function LinkedinCompaniesProvider({ children }) {
  const { data, error, loading } = useQuery(GET_LINKEDIN_COMPANIES);

  return (
    <LinkedinCompaniesContext.Provider
      value={{
        companies: data?.getLinkedinCompanies?.companies
      }}>
      {children}
    </LinkedinCompaniesContext.Provider>
  );
}

const useLinkedinCompanies = () => useContext(LinkedinCompaniesContext);

export { LinkedinCompaniesProvider, useLinkedinCompanies };
