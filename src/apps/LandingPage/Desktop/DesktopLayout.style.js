import injectSheet from "react-jss";

const containerStyle = {
  // total container
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  //center Hexagon
  main_hex: {
    width: "70%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  root_container: {
    height: "100%"
  },
  left_side: {
    display: "flex",
    flexDirection: "column",
    width: "15%",
    height: "100%",
    justifyContent: "space-between"
  },
  right_side: {
    display: "flex",
    flexDirection: "column",
    width: "15%",
    height: "100%",
    justifyContent: "space-between"
  },
  miniHexagons: {
    width: "100%",
    height: "40%"
  }
};

export default component => injectSheet(containerStyle)(component);
