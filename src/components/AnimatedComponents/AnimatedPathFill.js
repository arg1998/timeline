import posed from "react-pose";

const AnimatedPathFill = posed.g({
  deactivated: {
    strokeDasharray: 0,
    strokeOpacity: 0.12,
    transition: {
      default: { duration: 600 }
    }
  },
  activated: {
    strokeDasharray: ({ pathSize }) => pathSize || 250,
    strokeOpacity: 0.9,
    transition: {
      default: { duration: 1000 , ease: "easeIn" }
    }
  }
});

export default AnimatedPathFill;
