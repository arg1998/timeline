import posed from "react-pose";

const AnimatedSpringOpacity = posed.g({
  deactivated: {
    fillOpacity: 0.15,
    strokeOpacity: 0.12,
    transition: {
      default: { duration: 1000 }
    }
  },
  activated: {
    fillOpacity: 0.8,
    strokeOpacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 50,
      default: { duration: 1000 }
    }
  }
});

export default AnimatedSpringOpacity;
