import React, { Component } from "react";
import withSizes from "react-sizes";
import DesktopLayout from "./apps/LandingPage/Desktop/DesktopLayout";
import bp from "./utils/BreakPoints";
import MobileLayout from "./apps/LandingPage/Mobile/MobileLayout";
import { Route, Switch, withRouter } from "react-router-dom";
import TimeLine from "../src/apps/TimeLine/TimeLine";
import Play from "./components/PlayGround/Play";
import AboutUs from "./components/AboutUs/AboutUs";

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
        <Route path="/playground" component={Play} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/timeline" component={TimeLine} />
        <Route path="/" component={homeLayout} />
      </Switch>
    );
  }
}

const mapSizesToProps = ({ width, height }) => ({
  isDesktop: width > bp.desktop.minWidth
});

export default withRouter(withSizes(mapSizesToProps)(App));
