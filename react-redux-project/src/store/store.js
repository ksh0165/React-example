import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import promise from "redux-promise-middleware";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

/*
    Store 는 리덕스에서 가장 핵심적인 인스턴스
    이 안에 현재 상태를 내장하고있고, 구독(subscribe)중인 함수들이 상태가 업데이트 될 때 마다 다시 실행되게 해줌
    redux 에서 createStore 를 불러온 다음에 해당 함수의 파라미터로 리듀서를 넣음 
*/
const storeEnhancer = composeWithDevTools(applyMiddleware(promise, ReduxThunk));
const store = createStore(rootReducer, storeEnhancer);

export default store;
