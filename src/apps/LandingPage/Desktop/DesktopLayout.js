import React, { Component } from "react";
import withSizes from "react-sizes";
import ParticleBackground from "../../../components/ParticleBackground/ParticleBackground";
import DesktopStyles from "./DesktopLayout.style";
import FirstHexagon from "../../../components/Hexagons/FirstHexagon/FirstHexagon";
import FourthHexagon from "../../../components/Hexagons/FourthHexagon/FourthHexagon";
import ThirdHexagon from "../../../components/Hexagons/ThirdHexagon/ThirdHexagon";
import SecondHexagon from "../../../components/Hexagons/SecondHexagon/SecondHexagon";
import AbstractHexagon from "../../../components/AbstractHexagon/AbstractHexagon";

class DesktopLayout extends Component {
  render() {
    const { classes, aspectRatio } = this.props;
    if (aspectRatio < 1.5) {
      return (
        <p>
          Aspect Ratio is not supported, current AR is {aspectRatio.toFixed(2)}{" "}
          but to see the website you must provide a screen with bigger AR than
          1.5
        </p>
      );
    }
    return (
      <div className={classes.root_container}>
        <ParticleBackground />

        <div className={classes.rootContainer}>
          <div className={classes.sideBar}>
            <ThirdHexagon width="25vh" height="25vh" />
            <FourthHexagon width="25vh" height="25vh" />
          </div>

          <div>
            <AbstractHexagon width="100vh" height="95vh" />
          </div>

          <div className={classes.sideBar}>
            <FirstHexagon width="25vh" height="25vh" />
            <SecondHexagon width="25vh" height="25vh" />
          </div>
        </div>
      </div>
    );
  }
}

const mapScreenSizesToProps = ({ width, height }) => ({
  width,
  height,
  aspectRatio: width / height
});

export default withSizes(mapScreenSizesToProps)(DesktopStyles(DesktopLayout));
