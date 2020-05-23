/*
    Action 의 종류들을 선언. export 를 앞에 붙임으로서, 
    나중에 import * as types from './ActionTypes' 식으로 사용 가능
*/
export const TOGGLE_MENU = "TOGGLE_MENU";
export const FETCH_WEATHER = "FETCH_WEATHER";
export const FETCH_WEATHER_START = "FETCH_WEATHER_START";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAIL = "FETCH_WEATHER_FAIL";
export const FETCH_GETVALUE_SUCCESS = "FETCH_GETVALUE_SUCCESS";
export const FETCH_GETVALUE_FAIL = "FETCH_GETVALUE_FAIL";
export const LOGIN_CHECK = "LOGIN_CHECK";