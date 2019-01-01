import React, { Component } from "react";
import withSizes from "react-sizes";
import DesktopLayout from "./apps/LandingPage/Desktop/DesktopLayout";
import bp from "./utils/BreakPoints";
import MobileLayout from "./apps/LandingPage/Mobile/MobileLayout";
import { Route, Switch, withRouter } from "react-router-dom";
import TimeLine from "../src/apps/TimeLine/TimeLine";
import Play from "./components/PlayGround/Play";

class App extends Component {
  render() {
    const { isDesktop } = this.props;

    let homeLayout = null;
    if (isDesktop) {
      homeLayout = DesktopLayout;
    } else {
      homeLayout = MobileLayout;
    }

    return (
      <Switch>
        <Route path="/playground" render={() => <Play />} />
        <Route path="/timeline" render={() => <TimeLine />} />
        <Route path="/" component={homeLayout} />
      </Switch>
    );
  }
}

const mapSizesToProps = ({ width, height }) => ({
  isDesktop: width > bp.desktop.minWidth,
  screen: { w: width, h: height }
});

export default withRouter(withSizes(mapSizesToProps)(App));
