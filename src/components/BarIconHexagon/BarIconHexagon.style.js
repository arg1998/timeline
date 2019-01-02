import injectSheet from "react-jss";

const styles = {
  "@keyframes activeEventBarIconAnimation": {
    from: {
      transform: "rotate(0deg)"
    },
    to: {
      transform: "rotate(360deg)"
    }
  },
  active: {
    transformOrigin: '50% 50%',
    animation: {
      name: "activeEventBarIconAnimation",
      duration: "2s",
      timingFunction: "linear",
      iterationCount: "infinite"
    }
  }
};

export default component => injectSheet(styles)(component);
