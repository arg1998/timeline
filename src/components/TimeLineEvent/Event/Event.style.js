import injectSheet from "react-jss";

const styles = {
  sideContainer: ({ isDesktop }) => ({
    height: "100%",
    boxSizing: "border-box",
    zIndex: 1,
    width: isDesktop ? "50%" : "100%",
    display: "flex",
    flexDirection: "row",
    position: "relative"
  }),
  horizontalBar: ({ horizontalBarSize }) => ({
    width: "100%",
    height: horizontalBarSize,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: -(horizontalBarSize / 2)
  }),
  gap: ({ isDesktop }) => ({
    flexGrow: isDesktop ? 3 : 10,
    minWidth: isDesktop ? 150 : 60,
    boxSizing: "border-box"
  }),
  contentContainer: {
    flexGrow: 10,
    boxSizing: "border-box",
    height: "100%",
    display: "flex",
    alignItems: "flex-end"
  },
  eventBox: ({ isDesktop }) => ({
    width: "100%",
    borderRadius: "5px 5px 0 0 ",
    minHeight: isDesktop ? 180 : 120,
    maxHeight: 350,
    overflow: "hidden",
    padding: 10,
    backgroundColor: "#254"
  }),
  eventTitle: {
    padding: 0,
    margin: 0,
    marginLeft: 0,
    color: "#fff",
    fontFamily: "Scope One"
  },
  eventImage: ({ isDesktop }) => ({
    width: isDesktop ? 160 : 100,
    height: isDesktop ? 140 : 70,
    float: "left",
    marginRight: 10
  }),
  eventOptions: ({ isDesktop }) => ({
    height: isDesktop ? 64 : 32,
    display: "flex",
    flexDirection: isDesktop ? "row" : "row-reverse",
    justifyContent: "space-between",
    paddingTop: 5,
    position: "absolute",
    top: "100%"
  }),
  right: {
    right: 0
  },
  left: {
    left: 0
  }
};

export default component => injectSheet(styles)(component);
