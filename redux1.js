import React, {Component} from 'react';
import './App.css';
import {createStore} from 'redux';

function reducer(state,action){
  console.log(state,action);
  if(state === undefined){
    return {
      contents:[
        {id:1, title:'HTML',desc:'HTML is ...'},
        {id:2, title:'CSS', desc:'CSS is ...'},
        {id:3, title:'JavaScript', desc:'JavaScript'}
      ]
    }
  } 
}
var store = createStore(reducer);
console.log(store.getState());

class ContentsCreate extends Component{
  state = {
    title:'',
    desc:''
  }
  changeFormHandler(ev){
    this.setState({[ev.target.name]:ev.target.value})
  }
  render(){
    return(
      <article>
        <form onSubmit={function(ev){
          ev.preventDefault();
          this.props.onSubmit(this.state);
        }.bind(this)}>
          <p><input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.changeFormHandler.bind(this)}></input></p>
          <p><textarea name="desc" placeholder="description" value={this.state.desc} onChange={this.changeFormHandler.bind(this)}></textarea></p>        
          <p><input type="submit"></input></p>
        </form>
      </article>
    );
  }
}

class ContentsUpdate extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc
    }
    this.changeFormHandler = this.changeFormHandler.bind(this);
  }
  changeFormHandler(ev){
    this.setState({[ev.target.name]:ev.target.value});
  }
  render(){
    return(
      <article>
        <form onSubmit={function(ev){
          ev.preventDefault();
          this.props.onSubmit(this.state.id, this.state.title,this.state.desc);
        }.bind(this)}>
          <p><input type="hidden" name="id" value={this.state.id}></input></p>
          <p><input type="text" name="title" placeholder="title" value={this.state.title} onChange={function(e){
            this.setState({title:e.target.value})
            }.bind(this)}></input></p>
          <p><textarea name="desc" placeholder="description" value={this.state.desc} onChange={function(e){
            this.setState({desc:e.target.desc})
            }.bind(this)}></textarea></p>        
          <p><input type="submit"></input></p>
        </form>
      </article>
    );
  }
}


class Subject extends Component{
  render(){
    return(
      <header>
        <h1><a href="/" onClick={function(e){
          e.preventDefault(); 
          this.props.onClick();         
        }.bind(this)}>
        {this.props.title}</a></h1>
        {this.props.desc}
      </header>
    );
  }
}

class TOC extends Component{
  
  render(){
    var state = store.getState();
      var i = 0;
      var list = [];
      while(i < state.contents.length){
        list.push(<li key={state.contents[i].id}>
          <a href={state.contents[i].id} name={state.contents[i].id} onClick={function(e){
            e.preventDefault();
            var action = {type:'SELECT', id: e.target.name}
            store.dispatch(action);
          }.bind(this)}>
          {state.contents[i].title}</a></li>)
        i = i + 1;
        }
    /*var list = [];
    var i = 0;  
    while(i < this.props.data.length){
      var data = this.props.data[i];
      list.push(<li key={data.id}>
        <a href={data.id+"1.html"} onClick={function(id,ev){
          ev.preventDefault();
            this.props.onSelect(id);
        }.bind(this,data.id)}>
        {data.title}</a></li>);
      i = i + 1;
    }
    */
    return (
      <nav>
        <ol>
      {list}
      </ol>
      </nav>
      );
  }
}

class Content extends Component{
  render(){
    return(
      <article>
        {/*<h2>{this.props.data.title}</h2>
        {this.props.data.desc}*/}
      </article>
    );
  }
}

class App extends Component {
  /*last_id=3
  state = {
    mode:'read',    
    select_id:3
    contents:[
      { id:1, title:'HTML',desc:'HTML is for information'},
      { id:2, title:'CSS',desc:'CSS is for information'},
      { id:3, title:'JavaScript',desc:'JavaScript is for information'}
    ]
  }

  getSelectContent(){
    var i = 0;
    while( i < this.state.contents.length){
      var data = this.state.contents[i]; 
      if(this.state.select_id === data.id){
        return data;
      }
      i = i + 1;
    }
  }

  getContentComponent(){
    if(this.state.mode === 'read'){
      return <Content data={this.getSelectContent()}></Content>
    }else if(this.state.mode === 'welcome'){
      return <Content data={{title:'Welcome', desc:'HELLO, React'}}></Content>
    }else if(this.state.mode === 'create'){
      return <ContentsCreate onSubmit={function(formData){
        this.last_id = this.last_id + 1;
        formData.id = this.last_id;
        var newContents = Object.assign([],this.state.contents)
        newContents.push(formData);
        this.setState({contents:newContents,select_id:this.last_id, mode:'read'});
      }.bind(this)}></ContentsCreate>
    }else if(this.state.mode === 'update'){
      var _content = this.getSelectContent();
      return <ContentsUpdate data={_content} onSubmit={function(_id,_title,_desc){
        var _contents = Array.from(this.state.contents);
        var i = 0;
        while(i < _contents.length){
          if(_contents[i].id === _id){
            _contents[i] = {id: _id, title: _title, desc: _desc};
            break;
          }
          i = i + 1;
        }
        this.setState({
          contents:_contents,
          mode:'read'
        });
        console.log(_id,_title, _desc);
        console.log(this.state.contents);
      }.bind(this)}></ContentsUpdate>
    }
  }

  getControlComponent(){
    return [
      <a key="1" href="/create" onClick={function(ev){
        ev.preventDefault();
        this.setState({mode:'create'});
      }.bind(this)}>create  </a>,
      <a key="2" href="/update" onClick={function(ev){
        ev.preventDefault();
        this.setState({mode:'update'});
      }.bind(this)}>update  </a>,
      <input key="3" type="button" value="delete" onClick={function(){
        var newContents = this.state.contents.filter(function(el){
          if(el.id !== this.state.select_id){
            return el;
          }
        }.bind(this));
        this.setState({contents:newContents, mode: 'welcome'});
      }.bind(this)}></input>
    ]
  }
  */
  render(){  
    return (     
      <div className="App">
      {/*<Subject title="Web" desc="World wide web"
        onClick={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}></Subject>
      <TOC data={this.state.contents} 
      onSelect={function(id){
        this.setState({select_id:id, mode:'read'})
      }.bind(this)}></TOC>
      {this.getControlComponent()}
    {this.getContentComponent()}*/}
    <Subject></Subject>
    <TOC></TOC>
    <Content></Content>
      </div>
    );  
  }
}

export default App;
