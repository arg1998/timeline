import React, { Component } from "react";
import withSizes from "react-sizes";
import ParticleBackground from "../../../components/ParticleBackground/ParticleBackground";
import DesktopStyles from "./DesktopLayout.style";
import FirstHexagon from "../../../components/Hexagons/FirstHexagon/FirstHexagon";
import FourthHexagon from "../../../components/Hexagons/FourthHexagon/FourthHexagon";
import ThirdHexagon from "../../../components/Hexagons/ThirdHexagon/ThirdHexagon";
import SecondHexagon from "../../../components/Hexagons/SecondHexagon/SecondHexagon";
import AbstractHexagon from "../../../components/AbstractHexagon/AbstractHexagon";

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class DesktopLayout extends Component {
  state = { activeIndex: -1 };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState, newProps) => ({
        activeIndex: (prevState.activeIndex + 1) % 4
      }));
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { classes, aspectRatio } = this.props;
    const { activeIndex } = this.state;
    if (aspectRatio < 1.5) {
      return (
        <p>
          Aspect Ratio is not supported, current AR is {aspectRatio.toFixed(2)}
          but to see the website you must provide a screen with bigger AR than
          1.5
        </p>
      );
    }

    return (
      <div>
        <ParticleBackground count={100} />
        <div className={classes.navBar}>
            <img
              className={classes.leftNavImage}
              src={require("../../../res/images/hamburger.png")}
            />
            <img 
              className={classes.rightNavImage}
              src={require("../../../res/images/hamburger.png")}
            />
            
          <div className={classes.rootContainer}>
            <div className={classes.sideBar}>
              <div style={{ width: "25vh", height: "25vh" }}>
                <FourthHexagon
                  width="100%"
                  height="100%"
                  active={activeIndex == 3}
                />
              </div>
              <div style={{ width: "25vh", height: "25vh" }}>
                <ThirdHexagon
                  width="100%"
                  height="100%"
                  active={activeIndex == 2}
                />
              </div>
            </div>

            <div style={{ width: "100vh", height: "95vh" }}>
              <AbstractHexagon width="100%" height="100%" />
            </div>

            <div className={classes.sideBar}>
              <div style={{ width: "25vh", height: "25vh" }}>
                <FirstHexagon
                  width="100%"
                  height="100%"
                  active={activeIndex == 0}
                />
              </div>
              <div style={{ width: "25vh", height: "25vh" }}>
                <SecondHexagon
                  width="100%"
                  height="100%"
                  active={activeIndex == 1}
                />
              </div>
            </div>
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
