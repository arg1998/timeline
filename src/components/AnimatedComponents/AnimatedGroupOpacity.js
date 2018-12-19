import posed from "react-pose";

const AnimatedGroupOpacity = posed.g({
  deactivated: {
    fillOpacity: 0.35,
    strokeOpacity: 0.12,
    transition: {
      default: { duration: 1000 }
    }
  },
  activated: {
    fillOpacity: ({ endOpacity }) => endOpacity || 1,
    strokeOpacity: ({ endOpacity }) => endOpacity || 1,
    transition: {
      default: { duration: 1000 }
    }
  }
});

export default AnimatedGroupOpacity;
