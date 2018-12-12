import React, { Component } from "react";
import ParticleBackground from "../../../components/ParticleBackground/ParticleBackground";
import DesktopStyles from "./DesktopLayout.style";
import FirstHexagon from "../../../components/Hexagons/FirstHexagon/FirstHexagon";
import FourthHexagon from "../../../components/Hexagons/FourthHexagon/FourthHexagon";
import ThirdHexagon from "../../../components/Hexagons/ThirdHexagon/ThirdHexagon";
import SecondHexagon from "../../../components/Hexagons/SecondHexagon/SecondHexagon";
import AbstractHexagon from "../../../components/AbstractHexagon/AbstractHexagon";

class DesktopLayout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root_container}>
        <ParticleBackground />

        <div className={classes.container}>
          <div className={classes.left_side}>
            <div className={classes.miniHexagons}>
              <FourthHexagon width={250} height={250} />
            </div>
            <div className={classes.miniHexagons}>
              <ThirdHexagon width={250} height={250} />
            </div>
          </div>
          <div className={classes.main_hex}>
            <AbstractHexagon width='75%' height='90%' />
          </div>

          <div className={classes.right_side}>
            <div className={classes.miniHexagons}>
              <FirstHexagon width={250} height={250} />
            </div>
            <div className={classes.miniHexagons}>
              <SecondHexagon width={250} height={250} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DesktopStyles(DesktopLayout);
