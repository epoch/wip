import React, { Component, PropTypes } from 'react';
import NavTo from '../../containers/navTo'; // wtf
import './style.css';

class About extends Component {
  render() {
    return (
      <div className="about-view">
        <div>about {this.props.testValue}</div>
        <NavTo path="home">go home bum</NavTo>
      </div>
    )
  }
}

About.propTypes = {
  testValue: PropTypes.string.isRequired
}

export default About;
