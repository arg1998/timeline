import React, { Component } from "react";
import classNames from "classnames";

import TimeLineStyles from "./TimeLineLayout.style";

class TimeLineLayout extends Component {
  render() {
    const { classes, children, isDesktop } = this.props;
    return (
      <ul
        className={classNames({
          [classes.timeLine]: true,
          [classes.desktopLayout]: isDesktop,
          [classes.mobileLayout]: !isDesktop
        })}
      >
        {children}
      </ul>
    );
  }
}

export default TimeLineStyles(TimeLineLayout);
