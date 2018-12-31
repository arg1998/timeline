import injectSheet from "react-jss";

const containerStyle = {
  sideDrawer: {
    height: "100%",
    background: {
      color: "white"
    },
    // boxShadow: ["2 0 5 rgba(0, 0, 0, 0.5)"],
    position: "fixed",
    top: 0,
    width: "35%",
    maxWidth: 400,
    backgroundColor: "green",
    zIndex: 200
  },
  leftSide: {
    left: 0
  },
  rightSide: {
    right: 0
  }
};

export default component => injectSheet(containerStyle)(component);
