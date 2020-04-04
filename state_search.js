App -> App.jsx, Contact.jsx, ContextInfo.jsx

---------------------------------------------------------------------------------
import React, {Component} from 'react';
import './App.css';
import Apps from './components/App';

class App extends Component {
  render(){  
    return (     
      <div className="App">
        <Apps></Apps>
      </div>

    );  
  }
}

export default App;


---------------------------------------------------------------------------------

import React,{ Component } from 'react';
import Contact from './Contact';
class App extends Component{
    render(){
        return (
            <div>
                <Contact></Contact>
            </div>
        )
    }
}
export default App;

---------------------------------------------------------------------------------
import React,{ Component } from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            keyward:'',
            datas: [{name:'ksh', phone:'010-1235-1235'}]
        }
        this.handelChange = this.handelChange.bind(this);
    }

    handelChange(e){
        this.setState({keyward:e.target.value});
    }

    render(){
       const mapToComponents = (datas) => {
        datas.sort();
        datas = datas.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.keyward) > -1;
            })   
        return datas.map((contact, i) => {
               return (<ContactInfo contact={contact} key={i}/>);
           });
       };
       return(
        <div>
            <h1>Contact</h1>
            <input name="keyward" placeholder="search" value={this.state.keyward} onChange={this.handelChange}/>
            <div>{mapToComponents(this.state.datas)}</div>
        </div>
       );
   } 
}
-----------------------------------------------------------------------------

import React,{ Component } from 'react';
import { render } from 'react-dom';

export default class ContactInfo extends Component{
    render(){
        return(
            <article>
                {this.props.contact.name}
                {this.props.contact.phone}
            </article>
        );
    }
}
