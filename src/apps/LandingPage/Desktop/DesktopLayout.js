import React, { Component } from "react";
import withSizes from "react-sizes";
import ParticleBackground from "../../../components/ParticleBackground/ParticleBackground";
import DesktopStyles from "./DesktopLayout.style";
import FirstHexagon from "../../../components/Hexagons/FirstHexagon/FirstHexagon";
import FourthHexagon from "../../../components/Hexagons/FourthHexagon/FourthHexagon";
import ThirdHexagon from "../../../components/Hexagons/ThirdHexagon/ThirdHexagon";
import SecondHexagon from "../../../components/Hexagons/SecondHexagon/SecondHexagon";
import AbstractHexagon from "../../../components/AbstractHexagon/AbstractHexagon";
import Ratio from "../../../components/Warning/Ratio";

class DesktopLayout extends Component {
  state = { activeIndex: -1 };

  _miniHexagonClickHandler = index => {
    this.setState({ activeIndex: index });
  };
  render() {
    const { classes, aspectRatio } = this.props;
    const { activeIndex } = this.state;

    if (aspectRatio < 1.5) {
      return (
        <>
          <ParticleBackground count={70} touch={false} />
          <Ratio />
        </>
      );
    }

    return (
      <div>
        <ParticleBackground count={80} touch={true} />
        <div className={classes.navBar}>
          <img
            alt=""
            className={classes.leftNavImage}
            src={require("../../../res/images/hamburger.png")}
          />
          <img
            alt=""
            className={classes.rightNavImage}
            src={require("../../../res/images/hamburger.png")}
          />

          <div className={classes.rootContainer}>
            <div className={classes.sideBar}>
              <div style={{ width: "25vh", height: "25vh" }}>
                <FourthHexagon
                  width="100%"
                  height="100%"
                  active={activeIndex === 3}
                  onClick={() => this._miniHexagonClickHandler(3)}
                />
              </div>
              <div style={{ width: "25vh", height: "25vh" }}>
                <ThirdHexagon
                  width="100%"
                  height="100%"
                  active={activeIndex === 2}
                  onClick={() => this._miniHexagonClickHandler(2)}
                />
              </div>
            </div>

            <div style={{ width: "100vh", height: "95vh" }}>
              <AbstractHexagon
                width="100%"
                height="100%"
                activeIndex={activeIndex}
              />
            </div>

            <div className={classes.sideBar}>
              <div style={{ width: "25vh", height: "25vh" }}>
                <FirstHexagon
                  width="100%"
                  height="100%"
                  active={activeIndex === 0}
                  onClick={() => this._miniHexagonClickHandler(0)}
                />
              </div>
              <div style={{ width: "25vh", height: "25vh" }}>
                <SecondHexagon
                  width="100%"
                  height="100%"
                  active={activeIndex === 1}
                  onClick={() => this._miniHexagonClickHandler(1)}
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
