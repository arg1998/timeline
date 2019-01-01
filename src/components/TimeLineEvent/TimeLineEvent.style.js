import injectSheet from "react-jss";

const styles = {
  eventRow: {
    userSelect: "none", 
    width: "100%",
    marginBottom: 60,
    position: "relative",
    display: "flex",
    flexDirection: "row"
  },
  barIcon: ({ barIconSize, isDesktop }) => ({
    width: barIconSize,
    height: barIconSize,
    position: "absolute",
    left: isDesktop
      ? `calc(50% - ${barIconSize / 2}px)`
      : `calc(0% - ${barIconSize / 2}px)`,
    bottom: `calc(-${barIconSize / 2}px)`,
    zIndex: 2
  })
};

export default component => injectSheet(styles)(component);
