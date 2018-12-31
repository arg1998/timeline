import React, { Component } from "react";
import classNames from "classnames";
import Fake from "../../res/FakeJsonData";
import TimeLineStyles from "./TimeLineLayout.style";

class TimeLineLayout extends Component {
  state = { data: Fake };
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
