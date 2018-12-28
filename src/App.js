import React, { Component } from "react";
import withSizes from "react-sizes";
import DesktopLayout from "./apps/LandingPage/Desktop/DesktopLayout";
import bp from "./utils/BreakPoints";
import MobileLayout from "./apps/LandingPage/Mobile/MobileLayout";
import { Route, Switch, withRouter } from "react-router-dom";
import TimeLineLayout from "../src/containers/TimeLineLayout/TimeLineLayout";
import TimeLine  from "../src/apps/TimeLine/TimeLine";

class App extends Component {
  render() {
    const { isDesktop } = this.props;

    let Layout = null;
    if (isDesktop) {
      Layout = DesktopLayout;
    } else {
      Layout = MobileLayout;
    }

    return (
      <Switch>
        <Route path="/timeline" render={() => <TimeLine />} />
        <Route path="/" component={Layout} />
      </Switch>
    );
  }
}

const mapSizesToProps = ({ width, height }) => ({
  isDesktop: width > bp.desktop.minWidth,
  screen: { w: width, h: height }
});

export default withRouter(withSizes(mapSizesToProps)(App));
