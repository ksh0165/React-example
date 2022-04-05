import { combineReducers } from 'redux';

const initState = {
        name:'',
        nickname:''
}

const name = 'name',nickname = 'nickname';

const mainReducer = (state=initState,action) => {
    console.log(state); //{name: '', nickname: ''}
    console.log(action); //{type: 'name', state: {name: "1",nickname: ""}}
    switch(action.type){
        case name:
            console.log(action.state.name);
            return {
                ...action.state,
                name: action.state.name
            };
        case nickname:
            console.log(action.state.nickname);
            return {
                ...action.state,
                nickname: action.state.nickname
            };

        default:
            return state;
    }
}

export const reducer = combineReducers({
    mainReducer
})