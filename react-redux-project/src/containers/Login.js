import { connect } from "react-redux";
import Login from '../components/Login';
import * as actions from '../actions/actionCreators';
export default connect(mapStateToProps,mapDispatchToProps)(Login);
/*
  redux에 의해 관리되는 state를 가져와서 props를 통해 컨테이너 컴포넌트에서 사용가능하도록 매핑
*/

const mapStateToProps = (state) => ({
  loginId : state.login.loginId,
  loginPwd: state.login.loginPwd
});
  
  /* 
    action creator를 props에 bind하고, dispatch 함수를 통해 모든 reducer에게 전달
    이 함수에서 전달된 것들은 UserList 컨테이너의 props로 사용
  */
function mapDispatchToProps(dispatch){
  dispatch(actions.LoginCheck())
};
  

