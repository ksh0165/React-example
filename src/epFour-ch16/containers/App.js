import React ,{ useEffect,useState ,useRef, useCallback}from 'react';
import { useDispatch, useSelector } from "react-redux";
import {toggleSwitch,increase,decrease} from '../actions';
import './App.css';
//npm install node-sass react-icons
// https://github.com/velopert/learning-react/tree/master/10/todo-app
// npm install classnames
const App = (props) => {
    console.log(props);
    const toggle = useSelector((state)=>state.reducerCount.toggle);
    const counter = useSelector((state)=>state.reducerCount.counter);
    const dispatch = useDispatch(); 
 
    return (
        <>
        {toggle}
            <div>
                {/* <button onClick={()=>dispatch(toggleSwitch())}></button> */}
                <button className={"toggle "+(toggle ? "active" : "")} onClick={()=>dispatch(toggleSwitch())}></button>
            </div>
            <div>
                <h1>{counter}</h1>
                <button onClick={()=>dispatch(increase(1))}>+1</button>
                <button onClick={()=>dispatch(decrease())}>-1</button>
            </div>
        </>
    );
}

export default App;