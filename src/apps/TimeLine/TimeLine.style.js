import injectSheet from "react-jss";

const styles = {
  "@global": {
    body: {
      overflow: "visible",
      background: "rgba(11,23,63,1)"
    }
  },
  zoomLevelIndicator: ({ isDesktop }) => ({
    width: isDesktop ? 250 : 200,
    position: "fixed",
    top: 0,
    zIndex: 25,
    left: `calc(50% - ${(isDesktop ? 250 : 200) / 2}px)`
  }),
  zoomLevelIndicatorContainer: {
    position: "fixed",
    top: 0,
    width: "100%",

    zIndex: 20,
    transition: {
      property: "background-color",
      duration: "1.5s"
    },
    backgroundColor: "rgba(0,0,0,0)"
  },
  zoomLevelIndicatorContainerAnim: ({ isDesktop }) => ({
    height: isDesktop ? 120 : 100,
    backgroundColor: "rgba(0,0,0,0.95)"
  })
};

export default component => injectSheet(styles)(component);
