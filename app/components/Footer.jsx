import React from 'react'

const Footer = React.createClass({
  getInitialState() {
    return { key: 'value' }
  },

  render() {
    return React.createElement('div',{style: {height:'30px', background:'#900C3F' }})
  }
});

export default Footer;
