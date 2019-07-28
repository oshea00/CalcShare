import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Config';

class Config extends Component {
    componentDidMount() {
        this.props.requestConfig();
    }

    render() {
        window.Configuration = this.props.config;
        return this.props.children;
    }
}

const mapStateToProps = (state, ownProps) => ({
    ...state.config
})

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Config);
