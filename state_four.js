App.js -> (component/App , Contact, ContactInfo

-----------------------------------------------------
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

-----------------------------------------------------
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

-----------------------------------------------------
import React,{ Component } from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            datas: [{name:'ksh', phone:'010-1235-1235'}]
        }
    }
    render(){
       const mapToComponents = (datas) => {
           return datas.map((contact, i) => {
               return (<ContactInfo contact={contact} key={i}/>);
           });
       };
       return(
        <div>
            <h1>Contact</h1>
            <div>{mapToComponents(this.state.datas)}</div>
        </div>
       );
   } 
}
-----------------------------------------------------
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
-----------------------------------------------------
