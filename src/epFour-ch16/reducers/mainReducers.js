import { combineReducers } from "redux";
import { TOGGLE_SWITCH,INCREASE,DECREASE } from "../actions/mainActions";

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

export const reducer = combineReducers({
    reducerCount
})
