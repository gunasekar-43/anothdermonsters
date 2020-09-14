
import React, {Component} from 'react';
import {Cardlist} from './component/cardlist';


import  './App.css';

class App extends Component{
  constructor(){
      super();
          this.state={
             monster:[]
          
      };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monster:users}));
    console.log(this.state.monster);

  };
  render(){
      return(
          <div>
            <Cardlist monster={this.state.monster}>
            </Cardlist> 
            
          </div>
      )
  }

}
export default App;


