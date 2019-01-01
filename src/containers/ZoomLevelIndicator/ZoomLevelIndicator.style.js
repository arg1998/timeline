import injectSheet from "react-jss";
const BAR_WIDTH = 2;

const containerStyle = {
  rootContainer: {
    position: "relative",
    userSelect: "none",
    display: "flex",
    margin: [0, "auto"],
    justifyContent: "space-between",
    alignItems: "center"
  },
  centerSquare: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    zIndex: 22,
    justifyContent: "space-around",
    alignItems: "center"
  },
  leftSquare: {
    width: "18%",
    zIndex: 22
  },
  rightSquare: {
    width: "18%",
    zIndex: 22
  },
  bar: {
    position: "absolute",
    top: `calc(50% - ${BAR_WIDTH}px)`,
    right: 10,
    height: BAR_WIDTH,
    width: "90%",
    background: "#23f",
    zIndex: 21
  }
};

export default component => injectSheet(containerStyle)(component);
