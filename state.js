import React, {Component} from 'react';
import './App.css';
import {createStore} from 'redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:0
    };
  }
  handleClick(){
    this.setState({
      value: this.state.value + 1 
    })
  }
  render(){  
    return (     
      <div className="App">
        <h2>{this.state.value}</h2>
        <button onClick={this.handleClick.bind(this)}></button>
      </div>

    );  
  }
}

export default App;
