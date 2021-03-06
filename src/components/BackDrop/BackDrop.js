import React from "react";
import backDropStyle from "./BackDrop.style";
import propType from "prop-types";

const BackDrop = props => {
  return <div className={props.classes.backdrop} onClick={props.onClick} />;
};

BackDrop.propTypes = {
  color: propType.string,
  opacity: propType.number
};

export default backDropStyle(BackDrop);
