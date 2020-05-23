import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actions from '../actions/actionCreators';
//import {fetchValue} from '../actions/actionCreators';
import Aside from "../components/Aside";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import {Route,BrowserRouter as Router, Switch}  from 'react-router-dom';
import {LoginWithRedux} from "../components/Login";
//import axios from "axios";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-flow: column;
  transition: background 300ms linear;
  background-image: linear-gradient(to top, #5ee7df 0%, #66a6ff 100%);
`;

/*
  component안에서 method의 실행순서
  (1) 컴포넌트 생성시: constructor -> componentWillMount -> render -> componentDidMount
  (2) 컴포넌트 제거시: componentWillUnmount 
  (3) 컴포넌트의 props 변경시: componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate
  (4) 컴포넌트의 state 변경시: shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 
*/

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMenu: this.props.showMenu
    }
    //this.getFetchValue = this.getFetchValue.bind(this);
  }
  
  // getFetchValue(){
  // var headers = {
  //     'Access-Control-Allow-Origin': '*',        
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  // axios.get('http://192.168.35.181:3001/', headers)
  //   .then(function(res){
  //     console.log(res.data.showMenu)
  //     this.setState({showMenu:res.data.showMenu});
  //   })
  //   .catch(function(error){
  //     console.log(error);
  //   })
  //   .finally(function(){
  //   })
  // }
  componentDidMount() {
    // 컴포넌트 생성이 끝나고 실행될 초기화 로직, 예: Add된 도시 날씨를 읽어오기 
    // this.props.fetchWeather("San Francisco");
    //this.props.onfetchValue();
    this.props.onfetchValue();
    console.log(this.props.onfetchValue())
  }
  
  render() {
    const { loginId,loginPwd,showMenu,onToggleMenu } = this.props;
    return (
      <div className="container">
        <Container>
          {/* 컴포넌트는 Aside, Head, Main, Footer로 구성 */}
          <Aside showMenu={showMenu} onToggleMenu={onToggleMenu}/>
          <Header onToggleMenu={onToggleMenu} />
          <Router >
            <Switch>
              <Route exact path="/login" component={LoginWithRedux}/>
              <Route component={Main} />
            </Switch>
          </Router>  
              <Footer />
        </Container>
      </div>
    );
  }
}

/*
  redux에 의해 관리되는 state를 가져와서 props를 통해 컨테이너 컴포넌트에서 사용가능하도록 매핑
*/

const mapStateToProps = (state) => ({
  showMenu : state.navigation.showMenu
});

/* 
  action creator를 props에 bind하고, dispatch 함수를 통해 모든 reducer에게 전달
  이 함수에서 전달된 것들은 UserList 컨테이너의 props로 사용
*/
const mapDispatchToProps = (dispatch) => ({
  onfetchValue: () => dispatch(actions.fetchValue()),
  onToggleMenu: () => dispatch(actions.toggleMenu())
})

const enhance = connect(mapStateToProps, mapDispatchToProps);
const AppWithRedux = enhance(App);

export { App, AppWithRedux };

// 2020-05-17 배운점
// redux state를 이용하여 토글 제어한다
// action에 토글 액션명을 지정한다
// 리듀서에 dispatch한 액션명을 처리하는 로직을 담는다.
// 리듀서 값을 불러오거나 dispatch할 class 파일에서는 connect함수를 사용한다
// 리듀서가 나눠져 있다면, 그 리듀서안으로 . <= 들어가 필요한 리듀서의 변수값을 가져와야 한다.
// mapStateToProps 값을 가져올때는 {} = this.props; 이다
// 함수를 넘길때(부모) ex) mapDispatchToProps안의 액션명, 액션명을 넘겨준다
// 함수를 넘길때(자식) this.props.액션명으로 사용하여 부모의 함수를 호출한다
