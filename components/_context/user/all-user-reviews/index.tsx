import React, { createContext, useContext, useState } from 'react';
import { useQuery } from '@apollo/client';

import GET_USER_REVIEWS from '../../../../pages/api/query/user/get-reviews.gql';

const GetAllUserReviewsContext = createContext({
  allUserReviews: null,
  loading: null
});

function GetAllUserReviewsProvider({ children }) {
  const [limit, setLimit] = useState<number>(30);
  const [offset, setOffset] = useState<number>(0);

  const { data, error, loading } = useQuery(GET_USER_REVIEWS, {
    variables: {
      data: {
        limit,
        offset
      }
    }
  });

  return (
    <GetAllUserReviewsContext.Provider
      value={{
        allUserReviews: data?.getAllUserReviews,
        loading
      }}>
      {children}
    </GetAllUserReviewsContext.Provider>
  );
}

const useAllUserReviews = () => useContext(GetAllUserReviewsContext);

export { GetAllUserReviewsProvider, useAllUserReviews };
