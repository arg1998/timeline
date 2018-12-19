import injectStyleSheet from "react-jss";

const styles = {
  hoverAnimation: {
    "&:hover $humans": {
      strokeOpacity: 0.6
    },
    "&:hover $network": {
      strokeOpacity: 0.4,
      fillOpacity: 0.8
    }
  },
  network: {},
  humans: {}
};

export default component => injectStyleSheet(styles)(component);
