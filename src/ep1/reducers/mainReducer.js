import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT } from '../actions';

const initState = {
    value : 0,
    diff : 1
}

const reducerCount = (state=initState, actions) => {
    switch(actions.type){
        case INCREMENT:
            return state = {
                ...state,
                value:state.value+state.diff
            };
        case DECREMENT:
            if(state.value !== 0){
                return state = {
                    ...state,
                    value:state.value-state.diff
                };
            }else{
                return state;
            }
        default:
            return state;
    }
}

export const reducer = combineReducers({
    reducerCount
})