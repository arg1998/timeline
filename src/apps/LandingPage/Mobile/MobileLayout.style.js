import injectSheet from "react-jss";

const containerStyle = {
  mobileContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  main: ({ aspectRatio }) => {
    aspectRatio = aspectRatio.toFixed(3);
    let style = {
      width: "95vw",
      height: "95vw",
      justifyContent: "center",
      alignItems: "center"
    };
    
    if (aspectRatio <= 0.76) {
      //normal situations
    } else if (aspectRatio > 0.76 && aspectRatio < 1) {
      style.width = "60vh";
      style.height = "60vh";
    } else if (aspectRatio > 1) {
      style.width = "50vh";
      style.height = "50vh";
    }

    return style;
  },
  bottomSide: {
    width: "100%",
    height: "35vh"
  },
  sliderStyle: {
    "& div": {
      outline: "none"
    }
  }
};

export default component => injectSheet(containerStyle)(component);
