import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { About, Home, Contact } from '../../components';
import { gotoView } from '../../actions';

class App extends Component {
  render() {
    const { dispatch } = this.props;
    window.location.hash = this.props.page;
    return (
      <div>
        {this.getPageView()}
      </div>
    )
  }

  getPageView() {
    switch (this.props.page) {
      case 'home': return <Home />
      case 'about': return <About testValue="win" />
      case 'contact': return <Contact />
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps)(App);
