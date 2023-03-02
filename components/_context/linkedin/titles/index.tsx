import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/client';

import GET_CHANNEL_COUNTRIES from '../../../../pages/api/query/youtube/get-channel-countries.query.gql';

const LinkedinCompaniesContext = createContext({
  titles: null
});

function TitlesProvider({ children }) {
  const { data, error, loading } = useQuery(GET_CHANNEL_COUNTRIES);

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

export { TitlesProvider, useLinkedinTitles };
