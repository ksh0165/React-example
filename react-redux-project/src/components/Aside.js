import React,{Component} from "react";
import "./Aside.css";
import {connect} from 'react-redux';

//const Aside = ({showMenu,clickHandler}) => {
class Aside extends Component{  
  //const {clickHandler,setClickHandler} = useState();
  
  render(){  
  let {showMenu} = this.props;
      return (
        <div
          class={showMenu ? "side-menu__container-active" : "side-menu__container"}
        >
          <nav class="slide-menu">
            <section class="menu-header">
              <span class="greeting__text">Welcome Back</span>
              <span class="greeting__text A" onClick={this.props.onToggleMenu}>X</span>
              <div class="profile-image__container">
                <img
                  src="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png"
                  alt="profile"
                  class="profile__image"
                />
              </div>
              <div class="account-details">
                <span class="name__text">userEmail</span>
                <span class="email__text">Free Plan</span>
              </div>
            </section>
            <section class="menu-body">
              <ul class="menu-links">
                <li class="menu-link">Home</li>
                <li class="menu-link"> Add City</li>
                <li class="menu-link">Logout</li>
              </ul>
            </section>
            <section class="menu-footer">
              <small class="copyright__text">Copyright © 2019 Minimus</small>
            </section>
          </nav>
        </div>
      );
  };
}
const mapStateToProps = (state) => ({
  showMenu: state.naigation.showMenu
});

connect(mapStateToProps)(Aside);

export default Aside;
