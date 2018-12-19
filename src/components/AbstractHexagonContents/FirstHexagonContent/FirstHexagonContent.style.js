import injectStyleSheet from "react-jss";

const styles = {
  "@keyframes firstHexagonContentTitleAnimation": {
    from: {
      top: 30,
      opacity: 0
    },
    to: {
      top: 0,
      opacity: 1,
      transform: "translateY(0)"
    }
  },
  title: {
    transform: ["translateY(50px)", "translateX(50px)"],
    opacity: 0,
    animation: {
      name: "firstHexagonContentTitleAnimation",
      duration: "1.5s",
      delay: 500,
      fillMode: "forwards"
    }
  },
  "@keyframes fuelTrailAnimation": {
    "0%": {
      transform: ["translateY(0)", "translateX(0)"]
    },
    "50%": {
      transform: ["translateY(3px)", "translateX(-2px)"]
    },
    "100%": {
      transform: ["translateY(0)", "translateX(0)"]
    }
  },
  miniJetsFuelTrailAnimation: {
    "& :nth-child(1)": {
      animation: {
        name: "fuelTrailAnimation",
        duration: "1s",
        delay: 300,
        fillMode: "forwards",
        iterationCount: "infinite"
      }
    },
    "& :nth-child(2)": {
      animation: {
        name: "fuelTrailAnimation",
        duration: "1s",
        delay: 800,
        fillMode: "forwards",
        iterationCount: "infinite"
      }
    },
    "& :nth-child(3)": {
      animation: {
        name: "fuelTrailAnimation",
        duration: "1s",
        delay: 130,
        fillMode: "forwards",
        iterationCount: "infinite"
      }
    }
  },
  centerJetsFuelTrailAnimation: {
    "& :nth-child(1)": {
      animation: {
        name: "fuelTrailAnimation",
        duration: "1s",
        delay: 300,
        fillMode: "forwards",
        iterationCount: "infinite"
      }
    },
    "& :nth-child(2)": {
      animation: {
        name: "fuelTrailAnimation",
        duration: "1s",
        delay: 800,
        fillMode: "forwards",
        iterationCount: "infinite"
      }
    },
    "& :nth-child(3)": {
      animation: {
        name: "fuelTrailAnimation",
        duration: "1s",
        delay: 130,
        fillMode: "forwards",
        iterationCount: "infinite"
      }
    },
    "& :nth-child(4)": {
      animation: {
        name: "fuelTrailAnimation",
        duration: "1s",
        delay: 500,
        fillMode: "forwards",
        iterationCount: "infinite"
      }
    },
    "& :nth-child(5)": {
      animation: {
        name: "fuelTrailAnimation",
        duration: "1s",
        delay: 30,
        fillMode: "forwards",
        iterationCount: "infinite"
      }
    }
  },
  "@keyframes jetsAnimations": {
    from: {
      transform: ["translateY(50px)", "translateX(-30px)"],
      opacity: 0
    },
    to: {
      transform: ["translateY(0)", "translateX(0)"],
      opacity: 1
    }
  },
  jetsAnimations: {
    transform: ["translateY(0)", "translateX(0)"],
    opacity: 0,
    animation: {
      name: "jetsAnimations",
      duration: "1.5s",
      delay: 900,
      fillMode: "forwards"
    }
  },

  "@keyframes firstHexagonContentHorizontalLinesAnimations": {
    from: {
      transform: "translateY(25px)",
      opacity: 0
    },
    to: {
      transform: "translateY(0)",
      opacity: 1
    }
  },
  "@keyframes firstHexagonContentVerticalLinesAnimations": {
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
        name: "firstHexagonContentVerticalLinesAnimations",
        duration: "1s",
        delay: 400,
        fillMode: "forwards"
      }
    },
    "& :nth-child(2)": {
      opacity: 0,
      animation: {
        name: "firstHexagonContentHorizontalLinesAnimations",
        duration: "1s",
        delay: 900,
        fillMode: "forwards"
      }
    },
    "& :nth-child(3)": {
      opacity: 0,
      animation: {
        name: "firstHexagonContentHorizontalLinesAnimations",
        duration: "1s",
        delay: 1300,
        fillMode: "forwards"
      }
    },
    "& :nth-child(4)": {
      opacity: 0,
      animation: {
        name: "firstHexagonContentHorizontalLinesAnimations",
        duration: "1s",
        delay: 1500,
        fillMode: "forwards"
      }
    }
  },
  "@keyframes firstHexagonContentSideTextsAnimations": {
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
        name: "firstHexagonContentSideTextsAnimations",
        duration: "1.5s",
        delay: 1300,
        fillMode: "forwards"
      }
    },
    "& :nth-child(2)": {
      opacity: 0,
      animation: {
        name: "firstHexagonContentSideTextsAnimations",
        duration: "1.5s",
        delay: 1400,
        fillMode: "forwards"
      }
    },
  }
};

export default component => injectStyleSheet(styles)(component);
