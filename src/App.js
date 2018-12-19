import React, { Component } from "react";
import withSizes from "react-sizes";
import DesktopLayout from "./apps/LandingPage/Desktop/DesktopLayout";
import bp from "./utils/BreakPoints";
import MobileLayout from "./apps/LandingPage/Mobile/MobileLayout";

class App extends Component {
  render() {
    const { isDesktop } = this.props;

    let layout = <p>unsupported layout !!!</p>;
    if (isDesktop) {
      layout = <DesktopLayout />;
    } else {
      layout = <MobileLayout />;
    }

    return layout;
  }
}

const mapSizesToProps = ({ width, height }) => ({
  isDesktop: width > bp.desktop.minWidth,
  screen: { w: width, h: height }
});

export default withSizes(mapSizesToProps)(App);
