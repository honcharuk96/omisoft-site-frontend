import { connect } from 'react-redux';

import { AboutInfo } from 'components';
import { fetchTags } from 'actions/news.js';

const mapStateToProps = state => ({
  tags: state.news.tags,
});

const mapDispatchToProps = dispatch => ({
  fetchTags: () => dispatch(fetchTags()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutInfo);