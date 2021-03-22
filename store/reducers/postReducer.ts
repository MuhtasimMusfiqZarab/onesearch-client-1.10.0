import { GET_CHANNELS } from '../actions/types';

const INITIAL_STATE = {
  channels: [],
  channel: {},
  loading: false,
  error: null,
};

export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CHANNELS:
      return {
        ...state,
        channels: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
