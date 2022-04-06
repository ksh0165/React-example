import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
export const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const INSERT = 'INSERT';
export const TOGGLE = 'TOGGLE';
export const REMOVE = 'REMOVE';

let id = 3;

export const toggleSwitch = () => ({type:TOGGLE_SWITCH});
export const increase = (difference) => ({type:INCREASE, difference});
export const decrease = () => ({type:DECREASE });
export const changeInput = (input) => ({type:CHANGE_INPUT,input});
export const insert = (text) => ({type: INSERT, todo:{id:id++, text, done:false}});
export const toggleSwitch2 = (id) => ({type: TOGGLE, id});
export const remove = (id) => ({type:REMOVE, id}); 

function* increaseSaga(difference) {
    yield delay(1000);
    yield put(increase(difference));
}

function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga(){
    yield takeEvery(INCREASE,increaseSaga);
    yield takeLatest(DECREASE,decreaseSaga)
}