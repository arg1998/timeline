import React, { Component } from "react";
import ParticleBackground from "../../../components/ParticleBackground/ParticleBackground";
import DesktopStyles from "./DesktopLayout.style";

class DesktopLayout extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      //FIXME: for shima: migrate this style on jss
      <div className={classes.root_container}>
        <ParticleBackground />
        <div className={classes.container}>
          <div className={classes.left_side}>
            <div className={classes.miniHexagons} />
            <div className={classes.miniHexagons} />
          </div>
          <div className={classes.main_hex} />

          <div className={classes.right_side}>
            <div className={classes.miniHexagons} />
            <div className={classes.miniHexagons} />
          </div>
        </div>
      </div>
    );
  }
}

export default DesktopStyles(DesktopLayout);
