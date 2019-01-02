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
  horizontalBar: ({ horizontalBarSize, horizontalBarColor }) => ({
    width: "100%",
    height: horizontalBarSize,
    backgroundColor: horizontalBarColor || "#99b998",
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
    backgroundColor: "rgba(0,0,0,0.4)"
  }),
  eventTitle: {
    padding: 0,
    margin: 4,
    marginLeft: 0,
    color: "rgba(255,255,255,0.9)",
    fontFamily: "Scope One",
    fontSize: 26
  },
  eventImage: ({ isDesktop }) => ({
    width: isDesktop ? 160 : 100,
    height: isDesktop ? 140 : 70,
    float: "left",
    marginRight: 10
  }),
  eventDescription: {
    display: "inline",
    fontFamily: "Philosopher",
    color: "rgba(180,180,180,0.9)",
    fontSize: 22
  },
  eventOptions: ({ isDesktop }) => ({
    height: isDesktop ? 64 : 16,
    flexDirection: isDesktop ? "row" : "row-reverse",
    justifyContent: "space-between",
    paddingTop: 5,
    position: "absolute",
    top: "90%",
    opacity: 0,
    display: "flex",
    transition: "top 500ms, opacity 500ms"
  }),
  eventOptionShow: {
    // display: "flex",
    opacity: [1, "!important"],
    top: ["100%", "!important"]
  },

  eventDateContainer: {
    width: "100%",
    padding: 2,
    paddingTop: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  right: {
    right: 0
  },
  left: {
    left: 0
  },
  clearFix: {
    "&:after": { content: '""', clear: "both", display: "table" }
  },
  eventDate: {
    color: "#ccc"
  }
};

export default component => injectSheet(styles)(component);
