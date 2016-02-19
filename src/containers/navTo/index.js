import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { gotoView } from '../../actions';

class NavTo extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    window.addEventListener('hashchange', function() {
      dispatch(gotoView(window.location.hash.slice(1)));
    }, false);
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div onClick={() => { dispatch(gotoView(this.props.path)) }}>
        {this.props.children}
      </div>
    )
  }
}

export default connect()(NavTo);
