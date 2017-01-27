import React from 'react'

const pictures = ['../images/coffee1.jpg','../images/coffee2.jpg','../images/coffee3.jpg', '../images/coffee4.jpg', '../images/coffee5.jpg', '../images/coffee6.jpg','../images/tombrady.jpg']



const ItemComponent = React.createClass({
    getInitialState(){
      return { key: 'value' }
    },

    render(){

      return React.createElement('div', null, React.createElement('img', {src:this.props.pictureLocation, 
                                  style: {width:'400px', height:'400px'}}), React.createElement('br', null) )
      
    }
  })

  


const Main = React.createClass({
  getInitialState() {
      return { key: 'value' }
  },


  render() {
    
    const someList = pictures.map((item) => {
      return (<ItemComponent pictureLocation={item}/>)
    });

    return React.createElement('div', null, React.createElement('h1', null, "The Coffee Shop"), 
                                            React.createElement('input', {type:'text', placeholder: 'Search'}), 
                                            React.createElement('select',null,
                                                  React.createElement('option',{value:'bCoffee'},"Black Coffee"),
                                                  React.createElement('option',{value:'wCoffee'},"White Coffee"),
                                                  React.createElement('option',{value:'a'},"Mocha with the creammmm Coffee"), 
                                                  React.createElement('option',{value:'b'},"Fancy Coffee"), 
                                                  React.createElement('option',{value:'c'},"Just Beans")),
           React.createElement('div', null, someList))   

    // return (

    //   <div>{ someList }</div>
    // )
  }
  // render() {
  //   return (
  //     <main>
  //       Main
  //     </main>
  //   )
  // }
});

export default Main;


