import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { About, Home, Contact } from '../../components';
import { gotoView } from '../../actions';
import Routerus from '../../lib/routerus';

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

    var router = Routerus.createRouter();
    router.add('home', () => <Home /> );
    router.add('about', () => <About testValue="sdfsd" />);
    router.add('contact', () => <Contact />);

    return router.render(path);

    // <Routes>
    //   <Route path="home">
    //     <Home />
    //   </Route>
    //
    //   <Route path="about">
    //     <About />
    //   </Route>
    // <Routes>

    // router.match('home', function() {
    //   return <Home />
    // }).match('about', function() {
    //   return <About testValue="win again" />
    // }).match('contact', function() {
    //   return <Contact />
    // });


    // var router = Routerus.createRouter(path);
    //
    // router.match('home', () => {
    //   return <Home />
    // });
    //
    // router.match('about', () => {
    // });
    //
    // router.match('contact', () => {
    // });

    // switch (path) {
    //   case 'home': return <Home />
    //   case 'about': return <About testValue="win" />
    //   case 'contact': return <Contact />
    // }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    path: state.path
  }
}

export default connect(mapStateToProps)(App);
