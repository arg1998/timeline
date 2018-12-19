import injectSheet from "react-jss";

const containerStyle = {
  rootContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: {
      top: 25
    }
  },
  sideBar: {
    padding: {
      top: 15
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  navBar: {
    width: "100%",
    height: 50,
    position: "absolute",
    top: 0
  },
  leftNavImage: {
    display: "flex",
    justifyContent: "center",
    width: 30,
    height: 30,
    position: "inherit"
  },
  rightNavImage: {
    width: 30,
    height: 30,
    
    position: "inherit",
    right: 0
  }
};

export default component => injectSheet(containerStyle)(component);
