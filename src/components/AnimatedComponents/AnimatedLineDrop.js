import posed from "react-pose";

const AnimatedLineDrop = posed.g({
  activated: {
    strokeDashoffset: 0,
    transition: {
      default: { duration: 1500000, ease: "linear" }
    }
  },
  deactivated: {
    strokeDashoffset: 27000
  }
});

export default AnimatedLineDrop;
