import { connect } from 'react-redux';
import Contributor from './contributor';
import {
  fetchContributors,
  removeContributor,
  resetContributors
} from '../../actions/contributor_actions';

const mapStateToProps = state => ({
  contributors: state.contributors
});

const mapDispatchToProps = dispatch => ({
  fetchContributors: () => dispatch(fetchContributors()),
  removeContributor: id => dispatch(removeContributor(id)),
  resetContributors: data => dispatch(resetContributors(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contributor);
