import { combineReducers } from "redux";
import { TOGGLE_SWITCH,INCREASE,DECREASE, CHANGE_INPUT, TOGGLE, INSERT, REMOVE } from "../actions/mainActions";

const initalState = {
    toggle: false,
    counter: 0
}

const reducerCount = (state = initalState, action) => {
    console.log(action.type+" "+ state.toggle);
    switch(action.type){
        case TOGGLE_SWITCH:
            return{
                ...state,
                toggle: !state.toggle
            }
        case INCREASE:
            console.log(state.toggle +" "+state.counter+ " "+action.difference);
            return {
                ...state,
                counter: state.counter + action.difference
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

const initalState2 = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false
        }
    ]
}

const reducerTodos = (state = initalState2, action) => {
    switch(action.type){
        case CHANGE_INPUT:
            console.log(state.input + " "+action.done+" "+ action.type);
            return {
                ...state,
                input: action.input
            };
        case INSERT:
            console.log(state.input + " "+action.done+" "+ action.type + " "+ action.text + " "+ action.id);
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            };
        case TOGGLE:
            console.log(action.done+" "+ action.type + " "+ action.id);
            return {
                ...state,
                todos: state.todos.map((todo)=>(
                    todo.id === action.id ? {...todo, done:!todo.done} : todo
                ))
            };
        case REMOVE:
            console.log(action.type + " "+ action.id);
            return{
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
        default:
            return state;
    }
}

export const reducer = combineReducers({
    reducerCount,
    reducerTodos
})
