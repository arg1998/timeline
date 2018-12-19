import injectStyleSheet from "react-jss";

const styles = {
  hoverAnimation: {
    "&:hover $human": {
      strokeOpacity: 0.4
    },
    "&:hover $lines": {
      strokeOpacity: 0.4
    }
  },
  human: {},
  lines: {}
};

export default component => injectStyleSheet(styles)(component);
