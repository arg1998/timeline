import injectSheet from "react-jss";
const BAR_WIDTH = 4;

const containerStyle = {
  rootContainer: {
    position: "relative",
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
    zIndex: 5,
    justifyContent: "space-around",
    alignItems: "center"
  },
  leftSquare: {
    width: "15%",
    zIndex: 5
  },
  rightSquare: {
    width: "15%",
    zIndex: 5
  },
  bar: {
    position: "absolute",
    top: `calc(50% - ${BAR_WIDTH}px)`,
    right: 10,
    height: BAR_WIDTH,
    width: "90%",
    background: "#23f",
    zIndex: 4
  }
};

export default component => injectSheet(containerStyle)(component);
