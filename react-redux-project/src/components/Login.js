import React, {Component} from 'react';
import "./Login.css";
import {Redirect} from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from '../actions/actionCreators';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            loginId: this.props.loginId,
            loginPwd: this.props.loginPwd,
            redirect: false,
            resLogin: ''
        }
        this.loginProcess = this.loginProcess.bind(this);
    }
    
    loginProcess(id,password){
        console.log(id,password);
        console.log(this.state.loginId,this.state.loginPwd)
        this.setState({redirect:true});
        if(this.state.loginId === id && this.state.loginPwd === password){
            this.setState({resLogin:'Y'})
        }
    }

    render(){
        const {redirect,resLogin} = this.state;
        var _article = null;
        if(resLogin === 'Y'){
            _article = <Redirect to="/" />
        }else{
            _article = <Redirect to="/login" />
        }
        return (
            <div className="main__container">
                <div className="login-card">
                    <div className="login-content">
                        <span className="login-header">Login</span>
                        <form className="login-form" onSubmit={
                            function(ev){
                                ev.preventDefault();
                                this.loginProcess(ev.target.email.value, ev.target.password.value)
                            }.bind(this)
                        }>
                            <input type="text" autoFocus placeholder="Email" name="email" className="login-input"/>
                            <input type="password" placeholder="Password" name="password" className="login-input" minLength="3" required />
                            <input type="submit" name="submit" value="Login" className="login-btn" />
                        </form>
                        <div className="signup-link-wrapper">
                            <span className="signup-notice">Don't have an account?</span>
                            <a href="/" className="signup-link">Sign up</a>
                        </div>
                    </div>
                    <div className="login-aside">
                        <div className="login-aside-overlay"></div>
                        <h1 className="login-welcome-text">Welcome Back!</h1>
                        <hr className="login-aside-hr" />
                    </div>
                </div>
                {_article}
            </div>
        );
    }
}

/*
  redux에 의해 관리되는 state를 가져와서 props를 통해 컨테이너 컴포넌트에서 사용가능하도록 매핑
*/

const mapStateToProps = (state) => ({
    loginId: state.login.loginId,
    loginPwd: state.login.loginPwd
});

/* 
action creator를 props에 bind하고, dispatch 함수를 통해 모든 reducer에게 전달
이 함수에서 전달된 것들은 UserList 컨테이너의 props로 사용
*/
const mapDispatchToProps = (dispatch) => ({
    onGetLoginInfo: () => dispatch(actions.LoginCheck())
})

const enhance = connect(mapStateToProps, mapDispatchToProps);
const LoginWithRedux = enhance(Login);

export { Login, LoginWithRedux };