import injectStyleSheet from "react-jss";

const styles = {
  "@keyframes emptyContentTextFadeAnimation": {
    "0%": {
      opacity: 0.2
    },
    "50%": {
      opacity: 1
    },
    "100%": {
      opacity: 0.2
    }
  },
  warning: {
    opacity: 0.2,
    animation: {
      name: "emptyContentTextFadeAnimation",
      duration: "1.5s",
      timingFunction: "ease-in",
      iterationCount: "infinite"
    }
  }
};

export default component => injectStyleSheet(styles)(component);
