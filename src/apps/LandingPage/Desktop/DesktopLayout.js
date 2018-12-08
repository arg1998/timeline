import React, { Component } from "react";
import ParticleBackground from "../../../components/ParticleBackground/ParticleBackground";
import FirstHexagon from "../../../components/Hexagons/FirstHexagon/FirstHexagon";

class DesktopLayout extends Component {
  render() {
    return (
      <div>
        <ParticleBackground />
        <div
          style={{
            position: "absolute",
            right: 100,
            top: 50,
            borderRadius: "50%",
            backgroundColor: "rgba(0,0,0,0.35)",
            padding: 10,
            paddingTop: 25,
            paddingRight: 30
          }}
        >
          <FirstHexagon />
        </div>
      </div>
    );
  }
}

export default DesktopLayout;
