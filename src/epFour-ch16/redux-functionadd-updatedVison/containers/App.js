import React ,{ useEffect,useState ,useRef, useCallback}from 'react';
import { useDispatch, useSelector } from "react-redux";
import {toggleSwitch,increase,decrease,changeInput,insert,toggleSwitch2,remove} from '../actions';
import Counter from '../components/Counter';
import Todos from '../components/Todos';
import './App.css';
//npm install node-sass react-icons
// https://github.com/velopert/learning-react/tree/master/10/todo-app
// npm install classnames
// npm install redux-devtools-extension
const App = (props) => {
    console.log(props);
    const toggle = useSelector((state)=>state.reducerCount.toggle);
    const counter = useSelector((state)=>state.reducerCount.counter);
    const input = useSelector((state)=>state.reducerTodos.input || '');
    const todos = useSelector((state)=>state.reducerTodos.todos || []);
    const dispatch = useDispatch(); 
 
    return (
        <>
            <div>
                {/* <button onClick={()=>dispatch(toggleSwitch())}></button> */}
                <button className={"toggle "+(toggle ? "active" : "")} onClick={()=>dispatch(toggleSwitch())}></button>
            </div>
            <div>
                <Counter number={counter} increase={increase} decrease={decrease} dispatch={dispatch}/>
            </div>
            <hr />
            <Todos input={input} todos={todos} onChangeInput={changeInput} onInsert={insert} onToggle={toggleSwitch2} onRemove={remove} dispatch={dispatch} />
        </>
    );
}

export default App;