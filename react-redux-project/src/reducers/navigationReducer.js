import * as actions from "../actions/actionTypes";

// 리듀서는 액션의 type에 따라 변화를 일으키는 함수
// 리듀서 파일에는 최초변화를 일으키기전, 지니고있어야 할 초기상태가 정의
export const initialState = {
  showMenu: false
};

// 리듀서 함수는 state 와 action 을 파라미터로 가지는 함수이며, 
// 그 내부에서 switch 문을 통하여 action.type 에 따라 상태에 다른 변화를 일으키면 됨
// state 를 직접 수정하면 절대 안되고, 기존 state 값에 덮어쓴 새 상태객체를 만드는 방식으로 해야함 
export function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case actions.TOGGLE_MENU:
      return {
        ...state,
        showMenu: !state.showMenu
      };
    case actions.FETCH_GETVALUE_SUCCESS:
    return {
      ...state,
      showMenu:action.showMenu
    };
    case actions.FETCH_GETVALUE_FAIL:
      return {
        ...state,
        showMenu:''
      };
    default:
      return state;
  }
}
