import React,{Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./Header.css";
import { render } from "@testing-library/react";
// import { createStore } from "redux";
// import rootReducer from "../reducers";

// styled-component sample
const HeaderDiv = styled.div`
  background-color: #fff;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 0.25fr;
  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
  margin: 0;
  min-height: 4rem;
  align-items: center;
  animation: slidedown 0.5s ease-in-out, fadein 1s ease-in-out;
`;

class Header extends Component{
    
  render(){ 
    return (
      <HeaderDiv>
        <div class="left__section">
          <svg
            onClick={this.props.onToggleMenu}
            className="hamburger__icon"
            id="Menu_Burger_Icon"
            data-name="Menu Burger Icon"
            viewBox="31.5 30 49.9 32"
          >
            <rect
              id="Rectangle_9"
              width="49.9"
              height="4"
              class="hamburger__icon__fill"
              data-name="Rectangle 9"
              rx="2"
              transform="translate(31.5 58)"
            ></rect>
            <rect
              id="Rectangle_10"
              width="49.9"
              height="4"
              class="hamburger__icon__fill"
              data-name="Rectangle 10"
              rx="2"
              transform="translate(31.5 44)"
            ></rect>
            <rect
              id="Rectangle_11"
              width="49.9"
              height="4"
              class="hamburger__icon__fill"
              data-name="Rectangle 11"
              rx="2"
              transform="translate(31.5 30)"
            ></rect>
          </svg>
          <svg class="logo__icon" viewBox="150.3 22.2 213.7 42.8">
            <path
              fill="#00ff9b"
              d="M150.3 65V22.2L193 65z"
              data-name="Path 1"
            ></path>
            <path
              fill="#003eff"
              d="M193.1 65h-42.8L193 22.2z"
              data-name="Path 2"
            ></path>
            <text
              class="logo__text"
              fill="#432c85"
              font-family="SegoeUI-Semibold,Segoe UI"
              font-size="30"
              font-weight="600"
              letter-spacing=".1em"
              transform="translate(220 56)"
            >
              <tspan x="0" y="0">
                Seal1999
              </tspan>
            </text>
          </svg>
        </div>
        <h3 class="date__text">Today</h3>
        <div class="mode-toggle__container">
          <span class="mode-toggle__text">Light</span>
          <label class="toggle-button__container">
            <input type="checkbox" class="mode-toggle__input" />
            <span class="mode-toggle__bg"></span>
            <span class="mode-toggle__circle"></span>
          </label>
          <span class="mode-toggle__text">Dark</span>
        </div>
      </HeaderDiv>
    );
  };
}

Header.propTypes = {
  onToggleMenu: PropTypes.func
};

Header.defaultProps = {
  onToggleMenu: () => console.warn('onToggleMenu not defined'),
};

export default Header;