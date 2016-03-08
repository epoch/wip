import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { About, Home, Contact } from '../../components';
import { navigate } from '../../actions';
import Routerus from '../../lib/routerus';

var router = Routerus.createRouter();

class App extends Component {
  render() {
    const { dispatch } = this.props;
    window.location.hash = this.props.path;
    return (
      <div>
        {this.renderRoute(this.props.path)}
      </div>
    )
  }

  renderRoute(path) {
    router.add('home', () => <Home /> );
    router.add('about', () => <About testValue="sdfsd" />);
    router.add('contact', () => <Contact />);

    return router.render(path);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    path: state.route.path
  }
}

export default connect(mapStateToProps)(App);
