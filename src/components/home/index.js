import React, { PropTypes } from 'react';
import NavTo from '../../containers/navTo'; // wtf
import './style.css';

var Home = React.createClass({

  render: function() {
    return (
      <div className="home-view">
        <h1>home alone</h1>
        <NavTo path="about">goto about</NavTo>
        <NavTo path="contact">goto contact</NavTo>
      </div>
    )
  }

});

Home.propTypes = {}
export default Home;
