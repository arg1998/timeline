import React, { Component } from "react";
import TimeLineLayout from "../../containers/TimeLineLayout/TimeLineLayout";
import withSizes from "react-sizes";
//import TimeLineStyle from "./TimeLine.style";
import bp from "../../utils/BreakPoints";

class TimeLine extends Component {
  render() {
    const { isDesktop } = this.props;

    if (isDesktop) {
      return (
        <div>
          <TimeLineLayout />
        </div>
      );
    } else {
      return <p>fuck you</p>;
    }
  }
}

const mapSizesToProps = ({ width, height }) => ({
  isDesktop: width > bp.desktop.minWidth,
  screen: { w: width, h: height }
});

export default withSizes(mapSizesToProps)(TimeLine);
