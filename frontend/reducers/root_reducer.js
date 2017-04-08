import { combineReducers } from 'redux';
import contributorReducer from './contributor_reducer';

const rootReducer = combineReducers({
  contributors: contributorReducer
});

export default rootReducer;
