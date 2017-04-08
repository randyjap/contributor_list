import { RECEIVE_CONTRIBUTORS } from '../actions/contributor_actions';
import merge from 'lodash/merge';

let _defaultState = null;

const contributorReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CONTRIBUTORS:
      return action.contributors;
    default:
      return state;
  }
};

export default contributorReducer;
