import React, {Component} from 'react';
import './App.css';
import {createStore} from 'redux';

class ContactInfo extends Component{
  render(){
    return(
      <div>
        {this.props.contact.name}
        {this.props.contact.phone}
      </div>
    );
  }
}

class Contact extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
        {name:'Abet',  phone:'010-0000-0001'}
      ]
    }
  }
  render(){
    const mapToComponent = (data) => {
      return data.map((contact,i)=> {
        return (<ContactInfo contact={contact} key={i}/>);
      });
    }
    return(
      <div>
        {mapToComponent(this.state.data)}
      </div>
    );
  }
}

class App extends Component {
  render(){  
    return (     
      <div className="App">
        <Contact></Contact>
      </div>

    );  
  }
}

export default App;
