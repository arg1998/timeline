import injectStyleSheet from "react-jss";

const styles = {
  transitions: {
    "& $earth": {
      // TODO: not sure to apply transitions !!!!
      // transition: {
      //   property: "fill-opacity",
      //   duration: 150,
      //   timingFunction: "linear"
      // }
    }
  },
  hoverAnimation: {
    "&:hover $earth": {
      fillOpacity: 0.7
    }
  },
  earth: {}
};

export default component => injectStyleSheet(styles)(component);
