import React from "react";
import Particles from "react-particles-js";

class ParticleBackground extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    let { style, count } = this.props;

    if (!style) {
      style = {
        background:
          "linear-gradient(0deg, rgba(11,23,63,1) 0%, rgba(1,8,28,1) 100%)",
        padding: 0,
        margin: 0,
        display: "block",
        verticalAlign: "bottom",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: -1
      };
    }

    return (
      <Particles
        style={{ ...style }}
        params={{
          particles: {
            number: {
              value: count || 50,
              density: {
                enable: true,
                value_area: 500
              }
            },
            color: {
              value: "#eee1b3"
            },
            shape: {
              type: "polygon",
              stroke: {
                width: 0,
                color: "#eee1b3"
              },
              polygon: {
                nb_sides: 6
              }
            },
            opacity: {
              value: 0.6,
              random: true,
              anim: {
                enable: false,
                speed: 3,
                opacity_min: 0.2,
                sync: false
              }
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 180,
              color: "#ffffff",
              opacity: 0.1,
              width: 2
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: false,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1
                }
              },
              repulse: {
                distance: 200,
                duration: 0.2
              }
            }
          },
          retina_detect: true
        }}
      />
    );
  }
}

export default ParticleBackground;
