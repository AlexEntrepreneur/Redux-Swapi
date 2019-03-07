import {
  FETCHING_CHARS,
  FETCHING_CHARS_SUCCESS,
  FETCHING_CHARS_FAILURE
} from "../actions/action-constants";

const initialState = {
  characters: [],
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS:
      return {
        ...state,
        fetching: true
      };
    case FETCHING_CHARS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        fetching: false
      };
    case FETCHING_CHARS_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetching: false
      };
    default:
      return state;
  }
};
