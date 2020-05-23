import React from "react";
import PropTypes from "prop-types";

const Main = props => {
  // do something
  // const navClass = `nav-extended ${props.color}`;
  return (
    <div>
      <h3>Main</h3>
    </div>
  );
};

Main.defaultProps = {
  text: "Header text",
  color: "purple darken-4",
  textColor: "white",
};

Main.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
};

export default Main;
