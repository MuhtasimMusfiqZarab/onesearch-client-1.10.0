import { GET_POSTS } from '../actions/types';

const INITIAL_STATE = {
  posts: [],
  post: {},
  loading: false,
  error: null,
};

export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
