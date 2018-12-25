import injectStyleSheet from "react-jss";

const styles = {
  "@keyframes secondHexagonContentTitleAnimation": {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1,
      transform: ["translateY(0)", "translateX(0)"]
    }
  },
  title: {
    transform: ["translateY(50px)", "translateX(-50px)"],
    opacity: 0,
    animation: {
      name: "secondHexagonContentTitleAnimation",
      duration: "1.2s",
      delay: 200,
      fillMode: "forwards"
    }
  },

  "@keyframes secondHexagonContentHorizontalLinesAnimations": {
    from: {
      transform: "translateY(25px)",
      opacity: 0
    },
    to: {
      transform: "translateY(0)",
      opacity: 1
    }
  },
  "@keyframes secondHexagonContentVerticalLinesAnimations": {
    from: {
      transform: "translateY(-10px)",
      opacity: 0
    },
    to: {
      transform: "translateY(0)",
      opacity: 1
    }
  },
  horizontalLines: {
    "& :nth-child(1)": {
      opacity: 0,
      animation: {
        name: "secondHexagonContentVerticalLinesAnimations",
        duration: "1s",
        delay: 400,
        fillMode: "forwards"
      }
    },
    "& :nth-child(2)": {
      opacity: 0,
      animation: {
        name: "secondHexagonContentHorizontalLinesAnimations",
        duration: "1s",
        delay: 900,
        fillMode: "forwards"
      }
    },
    "& :nth-child(3)": {
      opacity: 0,
      animation: {
        name: "secondHexagonContentHorizontalLinesAnimations",
        duration: "1s",
        delay: 1300,
        fillMode: "forwards"
      }
    },
    "& :nth-child(4)": {
      opacity: 0,
      animation: {
        name: "secondHexagonContentHorizontalLinesAnimations",
        duration: "1s",
        delay: 1500,
        fillMode: "forwards"
      }
    },
    "& :nth-child(5)": {
      opacity: 0,
      animation: {
        name: "secondHexagonContentHorizontalLinesAnimations",
        duration: "1s",
        delay: 1800,
        fillMode: "forwards"
      }
    }
  },

  "@keyframes secondHexagonContentSideTextsAnimations": {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  },
  sideTexts: {
    "& :nth-child(1)": {
      opacity: 0,
      animation: {
        name: "secondHexagonContentSideTextsAnimations",
        duration: "1.5s",
        delay: 1300,
        fillMode: "forwards"
      }
    },
    "& :nth-child(2)": {
      opacity: 0,
      animation: {
        name: "secondHexagonContentSideTextsAnimations",
        duration: "1.5s",
        delay: 1700,
        fillMode: "forwards"
      }
    }
  },

  "@keyframes secondHexagonPenRotateAnimation": {
    "0%": {
      transform: "rotateY(0deg)"
    },
    "50%": {
      transform: "rotateY(15deg)"
    },
    "100%": {
      transform: "rotateY(0deg)"
    }
  },
  pen: {
    animation: {
      name: "secondHexagonPenRotateAnimation",
      duration: "1.5s",
      timingFunction: "linear",
      delay: 500,
      iterationCount: "infinite"
    }
  },
  "@keyframes secondHexagonArrowAnimation": {
    "0%": {
      fill: "#ff2555"
    },
    "50%": {
      fill: "#7f2555"
    },
    "100%": {
      fill: "#ff2555"
    }
  },
  arrow: {
    animation: {
      name: "secondHexagonArrowAnimation",
      duration: "3s",
      timingFunction: "linear",
      delay: 500,
      iterationCount: "infinite"
    }
  },
  "@keyframes secondHexagonIconAnimation": {
    from: { opacity: 0 },
    to: { opacity: 0.9 }
  },
  icon: {
    opacity: 0,
    animation: {
      name: "secondHexagonIconAnimation",
      duration: "2.5s",
      timingFunction: "linear",
      delay: 1000,
      fillMode: "forwards"
    }
  },
  "@keyframes secondHexagonEarthAnimation": {
    "0%": {
      opacity: 0.6
    },
    "50%": {
      opacity: 0.9
    },
    "100%": {
      opacity: 0.6
    }
  },
  earth: {
    animation: {
      name: "secondHexagonEarthAnimation",
      duration: "3s",
      timingFunction: "linear",
      delay: 500,
      iterationCount: "infinite"
    }
  }
};

export default component => injectStyleSheet(styles)(component);
