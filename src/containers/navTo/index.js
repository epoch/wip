import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { navigate } from '../../actions';

class NavTo extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    window.addEventListener('hashchange', function() {
      dispatch(navigate(window.location.hash.slice(1)));
    }, false);
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div onClick={() => { dispatch(navigate(this.props.path)) }}>
        {this.props.children}
      </div>
    )
  }
}

export default connect()(NavTo);
