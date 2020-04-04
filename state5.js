App.js -> component/App , Contact, ContactInfo, ContactDetails
search + print Click text

--------------------------------------------------------------------------------
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

--------------------------------------------------------------------------------

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


--------------------------------------------------------------------------------


import React,{ Component } from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';

export default class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            select_key:-1,
            keyward:'',
            datas: [{name:'ksh', phone:'010-1235-1235'}]
        }
        this.handelChange = this.handelChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handelChange(e){
        this.setState({keyward:e.target.value});
    }

    handleClick(key){
        this.setState({select_key : key}); 
    }

    render(){
       const mapToComponents = (datas) => {
        datas.sort();
        datas = datas.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.keyward) > -1;
            })   
        return datas.map((contact, i) => {
               return (<ContactInfo contact={contact} key={i}
               onClick={() => this.handleClick(i)}
               />);
           });
       };
       return(
        <div>
            <h1>Contact</h1>
            <input name="keyward" placeholder="search" value={this.state.keyward} onChange={this.handelChange}/>
            <div>{mapToComponents(this.state.datas)}</div>
            <ContactDetails isSelected={this.state.select_key != -1}
            contact={this.state.datas[this.state.select_key]}></ContactDetails>
        </div>
       );
   } 
}

--------------------------------------------------------------------------------

import React,{ Component } from 'react';
import { render } from 'react-dom';

export default class ContactInfo extends Component{
    render(){
        return(
            <article onClick={this.props.onClick}>
                {this.props.contact.name}
                {this.props.contact.phone}
            </article>
        );
    }
}
import React,{ Component } from 'react';
import { render } from 'react-dom';

export default class ContactInfo extends Component{
    render(){
        return(
            <article onClick={this.props.onClick}>
                {this.props.contact.name}
                {this.props.contact.phone}
            </article>
        );
    }
}

--------------------------------------------------------------------------------



import React,{ Component } from 'react';
import { render } from 'react-dom';

export default class ContactDetails extends Component{
    render(){
        const details = (<div><p>{this.props.contact.name}</p><p>{this.props.contact.phone}</p></div>);
        const blank = (<div>Not Selected</div>);
        return(
            <div>
            <div>Details</div>
            <div>{this.props.isSelected ? details : blank }</div>
            </div>
        );
    }
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    }
}
--------------------------------------------------------------------------------





--------------------------------------------------------------------------------
