import injectSheet from "react-jss";

const containerStyle = {
  rootContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: {
      top: 20
    }
  },
  sideBar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
};

export default component => injectSheet(containerStyle)(component);
