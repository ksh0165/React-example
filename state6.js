(state_search+select+delete)
App.js -> component/App , Contact, ContactInfo, ContactCreate, ContactDetail

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
import ContactCreate from './ContactCreate';

export default class Contact extends Component{
    constructor(props){
        super(props);
        var last_id : 1
        this.state = {
            mode: '',
            select_key:-1,
            keyward:'',
            datas: [{id:1, name:'ksh', phone:'010-1235-1235'}]
        }
        this.handelChange = this.handelChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getControlComponent = this.getControlComponent.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    /*handleCreate(contact){
        var newData = Array.from(this.state.datas);
        var _name = this.state.contact.name;
        var _phone = this.state.contact.phone;
        newData.push({id:this.state.contect.id+1,name:_name,phone:_phone});
        this.setState({
            datas: newData
        });
    }*/
    
    handleRemove(){
        var i = 0;
        var _datas = Array.from(this.state.contact.datas);
        while(i < this.state.contact.datas.length){
            if(_datas[i].id === this.state.contact.datas.id){
                _datas.splice(i,1);
                break;
            }
            i = i + 1;
        }
        this.setState({
            datas: _datas,
            select_key: -1
        });
    }

    handleEdit(name,phone){
        var _key = this.state.select_key;
        var i = 0;
        var _datas = Array.from(this.state.contact.datas);
        while(i < this.state.contact.datas.length){
            if(_datas[i].id === this.state.contact.datas.id){
                _datas[i] = {id: this.state.contact.datas.id, name: name , phone: phone}
                break;
            }
            i = i + 1;
        }
        this.setState({
            datas : _datas
        })
    }

    handelChange(e){
        this.setState({keyward:e.target.value});
    }

    handleClick(key){
        this.setState({select_key : key}); 
    }

    getControlComponent(){
        return[
            <a key="1" href="/create" onClick={function(ev){
                ev.preventDefault();
                this.setState({mode:'create'});
            }.bind(this)}>create</a>,
            <a key="2" href="/update" onClick={function(ev){
                ev.preventDefault();
                this.setState({mode:'update'});
            }.bind(this)}>update</a>,
            <input key="3" type="button" value="delete" onClick={function(){
                var newData = this.state.datas.filter(function(el){
                  if(el.id === this.state.select_key){
                      return el;
                  }
                }.bind(this));
                this.setState({datas:newData, mode: ''});
              }.bind(this)}></input>        
        ]
    }

    getContentComponent(){
        if(this.state.mode === 'create'){
            return <ContactCreate onSubmit={function(datas){
                this.last_id = this.last_id + 1;
                datas.id = this.last_id;
                var newData = Object.assign([], this.state.datas)
                newData.push(datas);
                this.setState({datas:newData,select_key:this.last_id})       
            }.bind(this)}></ContactCreate>
        } else if(this.state.mode === 'update'){
            return
        }
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
            {this.getControlComponent()}
            {this.getContentComponent()}
        </div>
       );
   } 
}

--------------------------------------------------------------------------------
import React,{ Component } from 'react';

export default class ContactCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            phone:''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    render(){
        return (
            <form onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(this.state);
                this.setState({name:'',phone:''});
            }.bind(this)}>
                <h1>Create Contact</h1>
                <p>
                    <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}/>
                    <input type="text" name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleChange}/>
                    <button>create</button>
                </p>
            </form>
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
