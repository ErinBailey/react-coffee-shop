import React from 'react'

const pictures = ['../images/coffee1.jpg','../images/coffee2.jpg','../images/coffee3.jpg', '../images/coffee4.jpg', '../images/coffee5.jpg', '../images/coffee6.jpg','../images/tombrady.jpg']

const coffees = [ {picLink: '../images/coffee1.jpg', name: 'the youngest $$$'},{picLink:'../images/coffee2.jpg' , name: 'super extra powerful coffee'},{picLink: '../images/coffee3.jpg' , name: 'real man coffee'},{picLink: '../images/coffee4.jpg', name: 'girl coffee'},{picLink: '../images/coffee5.jpg', name: 'old coffee'},{picLink: '../images/coffee6.jpg', name: 'young coffee'},{picLink: '../images/tombrady.jpg', name: 'el baristo'}]


const ItemComponent = React.createClass({
    getInitialState(){
      return { key: 'value' }
    },

    render(){

      return React.createElement('div', null, React.createElement('img', {src:this.props.coffeeType.picLink, 
                                  style: {width:'400px', height:'400px'}}), 
                                  React.createElement('br', null), 
                                  React.createElement('button',{
                                    style:{ 
                                      background:'#40FFB0', 
                                      border: '2px', 
                                      color: 'black' },
                                    id:'homeButton'}, 'Add to cart'),
                                    React.createElement('text', {style:{'font-size':'300%'}}," " + this.props.coffeeType.name ), 
                                  React.createElement('br', null) )

    }
  })

  


const Main = React.createClass({
  getInitialState() {
      return { key: 'value' }
  },


  render() {
    
    const someList = coffees.map((item) => {
      return (<ItemComponent coffeeType={item}/>)
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


