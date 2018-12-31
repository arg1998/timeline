import React, { Component } from "react";
import TimeLineLayout from "../../containers/TimeLineLayout/TimeLineLayout";
import withSizes from "react-sizes";
import TimeLineStyle from "./TimeLine.style";
import bp from "../../utils/BreakPoints";
import TimeLineEvent from "../../components/TimeLineEvent/TimeLineEvent";
import fakeData from "../../res/FakeJsonData";
class TimeLine extends Component {
  render() {
    const { isDesktop } = this.props;

    return (
      <div>
        <TimeLineLayout isDesktop={isDesktop}>
          {fakeData.map((e, i) => (
            <TimeLineEvent
              key={e.key}
              isDesktop={isDesktop}
              index={i}
              eventData={e}
            />
          ))}
        </TimeLineLayout>
      </div>
    );
  }
}

const mapSizesToProps = ({ width, height }) => ({
  isDesktop: width > bp.desktop.minWidth,
  screen: { w: width, h: height }
});

export default withSizes(mapSizesToProps)(TimeLineStyle(TimeLine));
