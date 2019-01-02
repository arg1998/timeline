import React from "react";
import pt from "prop-types";
import TimeLineEventStyles from "./TimeLineEvent.style";
import Event from "./Event/Event";
import BarIconHexagon from "../BarIconHexagon/BarIconHexagon";
import Fade from "react-reveal/Fade";

function TimeLineEvent(props) {
  const {
    classes,
    index,
    isDesktop,
    eventData,
    onActive,
    active,
    config,
    onFullInfoClick
  } = props;
  let side = "right";

  if (isDesktop) {
    side = index % 2 === 0 ? "right" : "left";
  }
  const colorConfig = config.colors[eventData.level - 1];
  return (
    <li className={classes.eventRow}>
      {/* cross icon */}
      <div className={classes.barIcon}>
        <BarIconHexagon
          borderColor={colorConfig.hexagon_border}
          centerColor={colorConfig.hexagon_center}
          active={active}
        />
      </div>
      <Fade>
        <div className={classes.wrapper}>
          <Event
            side={side}
            index={index}
            horizontalBarColor={colorConfig.horizontal_bar}
            isDesktop={isDesktop}
            dateOptions={config.date_conversion_options}
            onFullInfoClick={onFullInfoClick}
            onActive={onActive}
            active={active}
            {...eventData}
          />
        </div>
      </Fade>
    </li>
  );
}

TimeLineEvent.propTypes = {
  index: pt.number.isRequired,
  data: pt.object,
  barIconSize: pt.number,
  onFullInfoClick: pt.func.isRequired
};
TimeLineEvent.defaultProps = {
  barIconSize: 64
};

export default TimeLineEventStyles(TimeLineEvent);
