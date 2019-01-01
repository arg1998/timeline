import injectSheet from "react-jss";

const styles = {
  "@global": {
    body: {
      overflow: "visible",
      background: "rgba(11,23,63,1)"
    }
  }
};

export default component => injectSheet(styles)(component);
