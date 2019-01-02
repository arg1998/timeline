import React from "react";
import pt from "prop-types";
import classNames from "classnames";
import EventStyles from "./Event.style";
import EventOption from "../EventOption/EventOption";

const DATE_OPTIONS = {
  year: "numeric",
  month: "long",
  day: "numeric"
};

function Event(props) {
  const {
    classes,
    index,
    isDesktop,
    side,
    title,
    description,
    date,
    imageUrl,
    level,
    dateOptions,
    onFullInfoClick,
    onActive,
    active
  } = props;
  const isRight = side === "right";
  let rightSideGap = null;
  let leftSideGap = null;

  if (isRight) {
    rightSideGap = <div className={classes.gap} />;
  } else {
    leftSideGap = <div className={classes.gap} />;
  }

  const sideContent = (
    <>
      {/* horizontal bar */}
      <div className={classes.horizontalBar} />

      {/* RIGHT SIDE => empty space gap between vertical bar and event content*/}
      {rightSideGap}

      <div className={classes.contentContainer}>
        {/* actual container to hold the event data (images, text, title and ...) */}
        <div className={classes.eventBox} onClick={() => onActive(index)} >
          <h2 className={classes.eventTitle}>
            {title} (Level {level})
          </h2>

          <div className={classes.clearFix}>
            <img alt="" className={classes.eventImage} src={imageUrl} />
            <p className={classes.eventDescription}>{description}</p>
          </div>

          <div className={classes.eventDateContainer}>
            <p className={classes.eventDate}>
              {new Date(date).toLocaleDateString(
                "en-US",
                dateOptions || DATE_OPTIONS
              )}
            </p>
          </div>
        </div>
        {/* event options bellow the event box */}
        <div
          className={classNames({
            [classes.eventOptions]: true,
            [classes.eventOptionShow]: active,
            [classes.right]: isRight,
            [classes.left]: !isRight
          })}
        >
          <EventOption type="info" onClick={() => onFullInfoClick(index)} />
          <EventOption type="link" />
        </div>
      </div>

      {/* LEFT SIDE => empty space gap between vertical bar and event content*/}
      {leftSideGap}
    </>
  );

  let leftSideContent = null;
  if (isDesktop) {
    leftSideContent = (
      <div
        className={classes.sideContainer}
        children={isRight ? null : sideContent}
      />
    );
  }

  return (
    <>
      {/* left Container */}
      {leftSideContent}

      {/* right Container */}
      <div
        className={classes.sideContainer}
        children={isRight ? sideContent : null}
      />
    </>
  );
}

Event.propTypes = {
  side: pt.string,
  horizontalBarSize: pt.number,
  onFullInfoClick: pt.func
};

Event.defaultProps = {
  side: "right",
  horizontalBarSize: 6,
  onFullInfoClick: () => null
};

export default EventStyles(Event);
