import injectStyleSheet from "react-jss";

const styles = {
  transitions: {
    // TODO: not sure to apply transitions !!!
    // "& $miniHexagons": {
    //   transition: {
    //     property: "fill-opacity",
    //     duration: 150,
    //     timingFunction: "linear"
    //   }
    // },
    // "& $linkedKines": {
    //   transition: {
    //     property: "stroke-opacity",
    //     duration: 150,
    //     timingFunction: "linear"
    //   }
    // }
  },
  hoverAnimation: {
    "&:hover $miniHexagons": {
      fillOpacity: 0.9
    },
    "&:hover $linkedKines": {
      strokeOpacity: 0.4
    }
  },
  linkedKines: {},
  miniHexagons: {}
};

export default component => injectStyleSheet(styles)(component);
