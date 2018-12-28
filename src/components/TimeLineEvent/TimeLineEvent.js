import React from "react";
import TimeLineEventStyles from "./TimeLineEventLayout.style";
import classNames from 'classnames';

function TimeLineEvent(props) {
  const { eventData, classes, index } = props;
  const isRight = index % 2 === 0;
  return (
    <div>
      <li className={classes.eventRow}>
        <div
          className={classNames({
            [classes.rightStyle]: isRight,
            [classes.leftStyle]: !isRight
          })}
        >
          <p>{eventData.describtion}</p>
        </div>
      </li>
    </div>
  );
}

export default TimeLineEventStyles(TimeLineEvent);
