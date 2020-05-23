import { combineReducers } from "redux";
import { weatherReducer } from "./weatherReducer";
import { navigationReducer } from "./navigationReducer";
import { loginReducer } from "./loginReducer"; 

const rootReducer = combineReducers({
  navigation: navigationReducer,
  weather: weatherReducer,
  login: loginReducer
});

export default rootReducer;
