import axios from 'axios';
import {
  FETCHING_CHARS,
  FETCHING_CHARS_SUCCESS,
  FETCHING_CHARS_FAILURE
} from "./action-constants";

export const getCharacters = () => (dispatch) => {
  dispatch(fetchingChars());
  axios.get('https://swapi.co/api/people/')
  .then(res => dispatch(fetchingCharsSuccess(res.data.results)))
  .catch(err => dispatch(fetchingCharsError(err.message)));
};

const fetchingChars = () => {
  return {
    type: FETCHING_CHARS
  }
}

const fetchingCharsSuccess = (chars) => {
  return {
    type: FETCHING_CHARS_SUCCESS,
    payload: chars
  }
}

const fetchingCharsError = (error) => {
  return {
    type: FETCHING_CHARS_FAILURE,
    payload: error
  }
}
