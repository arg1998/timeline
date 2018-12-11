import injectSheet from "react-jss";

const containerStyle = {
  // total container
  container: {
    background: {
      color: "#fff"
    },
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  //center Hexagon
  main_hex: {
    width: "80%",
    height: "100%",
    background: {
      color: "blue"
    }
  },
  left_side: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    height: "100%",
    justifyContent: "space-around"
  },
  right_side: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    height: "100%",
    justifyContent: "space-around"
  },
  miniHexagons: {
    width: "100%",
    height: "30%",
    background: "#0f0"
  }
};

export default component => injectSheet(containerStyle)(component);
