import React from "react";
import pt from "prop-types";
import TimeLineEventStyles from "./TimeLineEvent.style";
import Event from "./Event/Event";
import BarIconHexagon from "../BarIconHexagon/BarIconHexagon";
import Fade from "react-reveal/Fade";

function TimeLineEvent(props) {
  const { classes, index, isDesktop, eventData } = props;
  let side = "right";

  if (isDesktop) {
    side = index % 2 === 0 ? "right" : "left";
  }

  return (
    <li className={classes.eventRow}>
      {/* cross icon */}
      <div className={classes.barIcon}>
        <BarIconHexagon />
      </div>
      <Fade up>
        <div
          style={{
            width: "100%",
            marginTop: 80,
            position: "relative",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <Event side={side} {...eventData} isDesktop={isDesktop} />
        </div>
      </Fade>
    </li>
  );
}

TimeLineEvent.propTypes = {
  index: pt.number.isRequired,
  data: pt.object,
  barIconSize: pt.number
};
TimeLineEvent.defaultProps = {
  barIconSize: 64
};

export default TimeLineEventStyles(TimeLineEvent);
