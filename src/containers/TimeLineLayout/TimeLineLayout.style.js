import injectSheet from "react-jss";

const BAR_WIDTH = 6; // in pixels
const verticalBarColor = "#0092A6";

const containerStyle = {
  timeLine: {
    padding: [50, 0],
    position: "relative",
  },
  desktopLayout: {
    width: "80%",
    margin: "0 auto",
    "&:after": {
      content: '""',
      position: "absolute",
      left: `calc(50% - ${BAR_WIDTH / 2}px)`,
      top: 5,
      width: BAR_WIDTH,
      height: "100%",
      background: verticalBarColor,
      zIndex: -1
    }
  },
  mobileLayout: {
    width: "95%",
    "&:after": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: BAR_WIDTH,
      height: "100%",
      background: verticalBarColor,
      zIndex: -1
    }
  }
};

export default component => injectSheet(containerStyle)(component);
