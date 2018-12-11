import React, { Component } from "react";
import ParticleBackground from "../../../components/ParticleBackground/ParticleBackground";
import DesktopStyles from "./DesktopLayout.style";

class DesktopLayout extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <div style={{ height: "100%" }}>
        <ParticleBackground />
        <div className={classes.container}>
          <div className={classes.left_side}>
            <div className={classes.first_hex} />
            <div className={classes.second_hex} />
          </div>
          <div className={classes.main_hex} />

          <div className={classes.right_side}>
            <div className={classes.three_hex} />
            <div className={classes.four_hex} />
          </div>
        </div>
      </div>
    );
  }
}

export default DesktopStyles(DesktopLayout);
