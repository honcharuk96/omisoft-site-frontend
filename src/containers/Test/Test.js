import {connect} from 'react-redux';
import {Test} from 'components';
import {test} from 'actions/test';

const mapStateToProps = state => ({
    info: state.test.info
});

const mapDispatchToProps = dispatch => ({
    test: info => dispatch(test(info))
});

export default connect(mapStateToProps,mapDispatchToProps)(Test);