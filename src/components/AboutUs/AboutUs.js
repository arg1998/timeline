import React from "react";
import withSizes from "react-sizes";
import bp from "../../utils/BreakPoints";
import Instagram from "../SocialMedia/Instagram";
import Gmail from "../SocialMedia/Gmail";
import Linkedin from "../SocialMedia/Linkedin";
import Telegram from "../SocialMedia/Telegram";

function AboutUs(props) {
  const IMAGE_WIDTH = 100;
  const IMAGE_HEIGHT = 100;

  const { isDesktop } = props;

  return (
    <div
      style={{
        backgroundColor: "rgba(11,23,63,1)",
        width: "100%",
        height: "100vh",
        margin: "auto"
      }}
    >
      {/* NavBar */}
      <div
        style={{
          width: "100%",
          height: isDesktop ? "10%" : "8%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "orange"
        }}
      >
        <p>Logo</p>
        <p>Timeline</p>
      </div>
      {/* Who Are We Section */}
      <div
        style={{
          width: "40%",
          height: "5vh",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <p
          style={{
            color: "#C0C0C0",
            fontFamily: "Philosopher",
            fontSize: 22,
            marginTop: isDesktop ? 50 : 20
          }}
        >
          Who Are We?
        </p>
      </div>
      {/* Description Section With divs About Persons */}
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          top: isDesktop ? IMAGE_WIDTH * 1.02 : IMAGE_WIDTH * 1,
          width: "60vw",
          minWidth: 100,
          height: isDesktop ? "75%" : "80%",
          left: isDesktop ? IMAGE_WIDTH * 4.5 : IMAGE_WIDTH * 1.4
        }}
      >
        {/* Amir Description */}
        <div
          style={{
            marginLeft: IMAGE_HEIGHT * 0.2
          }}
        >
          <p
            style={{
              color: "#ffeb3b",
              fontFamily: "Satisfy",
              fontSize: 25,
              margin: 0
            }}
          >
            AmirReza Ghorbani
          </p>
          <p
            style={{
              marginLeft: 10,
              color: "#e6e6fa",
              fontFamily: "Scope+One",
              fontSize: isDesktop ? 18 : 10,
              margin: isDesktop ? 15 : 10,
              padding: 0
            }}
          >
            Student at University Of Tehran, studying computer engineering.
            Heloves graphics programming and making games from scratch. Now, his
            focus is on AI and deep learning, specially Computer Vision. He's
            enthusiastic about backend engineering and dev-ops.
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Instagram />
            <Telegram />
            <Gmail />
            <Linkedin />
          </div>

          {/* first line */}
          <div
            style={{
              width: isDesktop ? "60%" : "90%",
              height: 2,
              backgroundColor: "#fff",
              marginTop: isDesktop ? 16 : 12
            }}
          />
        </div>

        {/* Shima Description */}
        <div
          style={{
            marginLeft: IMAGE_HEIGHT * 0.2
          }}
        >
          <p
            style={{
              color: "#ffeb3b",
              fontFamily: "Satisfy",
              fontSize: 25,
              margin: 0,
              padding: 0
            }}
          >
            Shima Shiuey
          </p>
          <p
            style={{
              margin: isDesktop ? 15 : 10,
              padding: 0,
              marginLeft: 10,
              color: "#e6e6fa",
              fontFamily: "Scope+One",
              fontSize: isDesktop ? 18 : 10
            }}
          >
            Student at University Of Tehran, studying computer engineering.Now,
            she is focus is on AI and deep learning
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Instagram />
            <Telegram />
            <Gmail />
            <Linkedin />
          </div>
          <div
            style={{
              width: isDesktop ? "60%" : "90%",
              height: 2,
              backgroundColor: "#fff",
              marginTop: isDesktop ? 16 : 12
            }}
          />
        </div>

        {/*  Shakila Description */}
        <div
          style={{
            marginLeft: IMAGE_HEIGHT * 0.2
          }}
        >
          <p
            style={{
              color: "#ffeb3b",
              fontFamily: "Satisfy",
              fontSize: 25,
              margin: 0,
              padding: 0
            }}
          >
            Shakila Rahban
          </p>
          <p
            style={{
              marginLeft: 10,
              color: "#e6e6fa",
              fontFamily: "Scope+One",
              fontSize: isDesktop ? 18 : 10,
              margin: isDesktop ? 15 : 10,
              padding: 0
            }}
          >
            Student at University Of Tehran, studying computer engineering.
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Instagram />
            <Telegram />
            <Gmail />
            <Linkedin />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          marginLeft: isDesktop ? IMAGE_WIDTH * 3 : IMAGE_WIDTH / 3,
          minWidth: IMAGE_WIDTH,
          width: "15vh",
          height: "85%"
        }}
      >
        {/* Column Person Images */}
        <div
          style={{
            top: IMAGE_HEIGHT / 2,
            width: 5,
            height: "100%",
            backgroundColor: "#fff",
            position: "absolute",
            zIndex: 4
          }}
        />
        <div
          style={{
            height: IMAGE_HEIGHT,
            width: IMAGE_WIDTH,
            backgroundColor: "green",
            borderRadius: IMAGE_WIDTH / 2,
            zIndex: 5
          }}
        >
          <img
            src={require("../../res/images/amir.jpg")}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
        </div>
        <div
          style={{
            height: IMAGE_HEIGHT,
            width: IMAGE_WIDTH,
            backgroundColor: "green",
            borderRadius: IMAGE_WIDTH / 2,
            zIndex: 5
          }}
        >
          <img
            src={require("../../res/images/shima.jpg")}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
        </div>
        <div
          style={{
            height: IMAGE_HEIGHT,
            width: IMAGE_WIDTH,
            backgroundColor: "green",
            borderRadius: IMAGE_WIDTH / 2,
            zIndex: 5
          }}
        >
          <img
            src={require("../../res/images/shakila.jpg")}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
        </div>
      </div>
    </div>
  );
}
const mapSizesToProps = ({ width, height }) => ({
  isDesktop: width > bp.desktop.minWidth,
  screen: { w: width, h: height }
});
export default withSizes(mapSizesToProps)(AboutUs);
