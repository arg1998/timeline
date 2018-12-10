import React, { Component } from "react";
import ParticleBackground from "../../../components/ParticleBackground/ParticleBackground";
import FirstHexagon from "../../../components/Hexagons/FirstHexagon/FirstHexagon";
import ThirdHexagon from "../../../components/Hexagons/ThirdHexagon/ThirdHexagon";
import SecondHexagon from "../../../components/Hexagons/SecondHexagon/SecondHexagon";
import FourthHexagon from "../../../components/Hexagons/FourthHexagon/FourthHexagon";
import AbstractHexagon from "../../../components/AbstractHexagon/AbstractHexagon";

class DesktopLayout extends Component {
  render() {
    return (
      <div>
        <ParticleBackground />
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: 64,
            top: 0,
            left: 0,
            backgroundColor: "rgba(100,50,200,0.4)",
            borderBottom: "2px rgba(100,50,100,0.9) solid"
          }}
        />

        <div style={{ width: "100%", marginTop: 64 , position:'relative', paddingTop: 20}}>
          <div
            style={{
              width: "15vw",
              height: "15vw",
              position: "absolute",
              left: "75vw"
            }}
          >
            <FirstHexagon width="100%" height="100%" />
          </div>

          <div
            style={{
              width: "20vw",
              height: "15vw",
              position: "absolute",
              bottom: "5vh",
              left: "75vw"
            }}
          >
            <SecondHexagon width="100%" height="100%" />
          </div>

          <div
            style={{
              width: "15vw",
              height: "15vw",
              position: "absolute",
              bottom: "5vh",
              left: "10vw"
            }}
          >
            <ThirdHexagon width="100%" height="100%" />
          </div>

          <div
            style={{
              width: "15vw",
              height: "15vw",
              position: "absolute",
              left: "10vw"
            }}
          >
            <FourthHexagon width="100%" height="100%" />
          </div>

          <div
            style={{
              width: "85vh",
              height: "85vh",
              margin: "0 auto"
            }}
          >
            <AbstractHexagon width="100%" height="100%" />
          </div>
        </div>
      </div>
    );
  }
}

export default DesktopLayout;
