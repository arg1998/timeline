import React, { Component } from "react";
import Fake from "../../res/FakeJsonData";
import TimeLineStyles from "./TimeLineLayout.style";
import TimeLineEvent from "../../components/TimeLineEvent/TimeLineEvent";

class TimeLineLayout extends Component {
  state = { data: Fake };
  render() {
    const { classes, children } = this.props;
    return (
      <ul className={classes.timeLine}>
        {this.state.data.map((eventData, index) => (
          <TimeLineEvent
            eventData={eventData}
            index={index}
            key={eventData.key}
          />
        ))}
      </ul>
    );
  }
}

export default TimeLineStyles(TimeLineLayout);
