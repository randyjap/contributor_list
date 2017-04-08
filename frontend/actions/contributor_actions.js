import * as contributorApiUtil from '../util/contributor_api_util';

export const RECEIVE_CONTRIBUTORS = "RECEIVE_CONTRIBUTORS";

export const receiveContributors = contributors => ({
  type: RECEIVE_CONTRIBUTORS,
  contributors
});

export const fetchContributors = () => dispatch => {
  return contributorApiUtil.getContributors().
    then(contributors => dispatch(receiveContributors(contributors)));
};

export const removeContributor = id => dispatch => {
  return contributorApiUtil.deleteContributor(id).
    then(contributors => dispatch(receiveContributors(contributors)));
};

export const resetContributors = data => dispatch => {
  return contributorApiUtil.postContributors(data).
    then(contributors => dispatch(receiveContributors(contributors)));
};
