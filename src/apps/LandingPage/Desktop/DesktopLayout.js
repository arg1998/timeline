import React, { Component } from "react";
import ParticleBackground from "../../../components/ParticleBackground/ParticleBackground";
import FirstHexagon from "../../../components/Hexagons/FirstHexagon/FirstHexagon";
import ThirdHexagon from "../../../components/Hexagons/ThirdHexagon/ThirdHexagon";
import SecondHexagon from "../../../components/Hexagons/SecondHexagon/SecondHexagon";
import FourthHexagon from "../../../components/Hexagons/FourthHexagon/FourthHexagon";

class DesktopLayout extends Component {
  render() {
    return (
      <div>
        <ParticleBackground />

        <div
          style={{
            position: "absolute",
            right: 100,
            top: 0
          }}
        >
          <FirstHexagon
            width={300}
            height={300}
          />
        </div>

        <div
          style={{
            position: "absolute",
            right: 400,
            top: 0
          }}
        >
          <SecondHexagon />
        </div>

        <div
          style={{
            position: "absolute",
            right: 750,
            top: 0
          }}
        >
          <ThirdHexagon />
        </div>

        <div
          style={{
            position: "absolute",
            right: 1050,
            top: 0
          }}
        >
          <FourthHexagon />
        </div>
      </div>
    );
  }
}

export default DesktopLayout;
