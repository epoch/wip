import React, { PropTypes } from 'react';
import NavTo from '../../containers/navTo'; // wtf

var Contact = React.createClass({

  render: function() {
    return (
      <div className="contact-view">
        <h1>do not contact</h1>
        <NavTo path="home">home</NavTo>
      </div>
    )
  }

});

export default Contact;
