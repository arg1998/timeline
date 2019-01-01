import React from "react";
import pt from "prop-types";
import EventOptionStyle from "./EventOption.style";
import linkImage from "../../../res/images/link.png";
import infoImage from "../../../res/images/info.png";

function EventOption(props) {
  const { classes, onClick, type } = props;
  let image = null;

  if (type === "info") {
    image = <img className={classes.imageStyle} alt="More Information" src={infoImage} />;
  } else if (type === "link") {
    image = <img className={classes.imageStyle} alt="Get Sharable Link" src={linkImage} />;
  }

  return (
    <div className={classes.eventOption} onClick={onClick}>
      {image}
    </div>
  );
}

EventOption.propTypes = {
  type: pt.oneOf(["info", "link"]),
  onClick: pt.func
};

export default EventOptionStyle(EventOption);
