import posed from "react-pose";

const AnimatedBeehive = posed.g({
  deactivated: {
    strokeDashoffset: 300,
    transition: {
      default: { duration: 1000 }
    }
  },
  activated: {
    strokeDashoffset: 0,
    transition: {
      default: { duration: 1000 }
    }
  }
});

export default AnimatedBeehive;
