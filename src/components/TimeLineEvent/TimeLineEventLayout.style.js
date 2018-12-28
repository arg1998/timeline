import injectSheet from "react-jss";

const containerStyle = {
  "@global": {
    body: {
      overflow: "visible"
    }
  },
  eventRow: {
    listStyle: {
      type: "none"
    },
    position: "relative",
    width: 18,
    margin: [0, "auto"],
    padding: {
      top: 50
    },
    background: "#a6d0ef",
    "&:after": {
      content: '""',
      position: "absolute",
      left: 49,
      bottom: 0,
      transform: "translateX(-50px)",
      width: 20,
      height: 20,
      borderRadius: 50,
      background: {
        color: "#90a7c4"
      }
    }
  },
  rightStyle: {
    position: "relative",
    bottom: 0,
    width: 400,
    padding: 15,
    background: "lightblue",
    left: 85,
    "&:before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      width: 63,
      height: 10,
      borderStyle: "solid",
      borderColor: "green",
      transform: "rotate(180deg)",
      background: "green",
      left: -68
    }
  },
  leftStyle: {
    position: "relative",
    bottom: 0,
    width: 400,
    padding: 15,
    background: "lightblue",
    right: 500,
    "&:before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      width: 63,
      height: 10,
      borderStyle: "solid",
      borderColor: "green",
      transform: "rotate(180deg)",
      background: "green",
      right: -69
    }
  }
};

export default component => injectSheet(containerStyle)(component);
