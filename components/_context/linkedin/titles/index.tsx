import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/client';

import GET_LINKEDIN_TITLES from '../../../../pages/api/query/linkedin/get-linkedin-titles.gql';

const LinkedinCompaniesContext = createContext({
  titles: null
});

function LinkedinTitlesProvider({ children }) {
  const { data, error, loading } = useQuery(GET_LINKEDIN_TITLES);

  return (
    <LinkedinCompaniesContext.Provider
      value={{
        titles: data?.getLinkedinTitles?.titles
      }}>
      {children}
    </LinkedinCompaniesContext.Provider>
  );
}

const useLinkedinTitles = () => useContext(LinkedinCompaniesContext);

export { LinkedinTitlesProvider, useLinkedinTitles };
