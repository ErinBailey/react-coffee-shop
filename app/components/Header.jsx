import React from 'react'

const Header = React.createClass({
  getInitialState() {
    return { key: 'value' }
  },

  render() {
    return React.createElement('div',{style: {height:'30px', background:'rgb(144, 12, 63)' }, id:'header'},
              React.createElement('button',{
                style:{ 
                  background:'#900C3F', 
                  border: 'none', 
                  color: 'white' },
                id:'homeButton'}, 'Home'), 
              React.createElement('button',{
                style:{ 
                  background:'#900C3F', 
                  border: 'none', 
                  color: 'white' },
                id:'menuButton'}, 'Menu'), 
                React.createElement('button',{
                style:{ 
                  background:'#900C3F', 
                  border: 'none', 
                  color: 'white' },
                id:'menuButton'}, 'Tom Brady'))
  }
});

export default Header;
