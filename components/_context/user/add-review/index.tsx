import React, { createContext, useContext, FC } from 'react';
import { useQuery } from '@apollo/client';

import ADD_USER_REVIEW from '../../../../pages/api/query/user/add-review.gql';

const UserReviewContext = createContext({
  currentUser: null,
  loading: null
});

function UserReviewProvider({ children }) {
  const { data, error, loading } = useQuery(ADD_USER_REVIEW);

  return (
    <UserReviewContext.Provider
      value={{
        currentUser: data?.currentUser,
        loading
      }}>
      {children}
    </UserReviewContext.Provider>
  );
}

const useReview = () => useContext(UserReviewContext);

export { UserReviewProvider, useReview };
