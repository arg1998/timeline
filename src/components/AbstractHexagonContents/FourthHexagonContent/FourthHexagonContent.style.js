import injectStyleSheet from "react-jss";

const styles = {
  "@keyframes fourthHexagonContentTitleAnimation": {
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
      name: "fourthHexagonContentTitleAnimation",
      duration: "1.2s",
      delay: 200,
      fillMode: "forwards"
    }
  },

  "@keyframes fourthHexagonContentHorizontalLinesAnimations": {
    from: {
      transform: "translateY(25px)",
      opacity: 0
    },
    to: {
      transform: "translateY(0)",
      opacity: 1
    }
  },
  "@keyframes fourthHexagonContentVerticalLinesAnimations": {
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
        name: "fourthHexagonContentVerticalLinesAnimations",
        duration: "1s",
        delay: 600,
        fillMode: "forwards"
      }
    },
    "& :nth-child(2)": {
      opacity: 0,
      animation: {
        name: "fourthHexagonContentHorizontalLinesAnimations",
        duration: "1s",
        delay: 700,
        fillMode: "forwards"
      }
    },
    "& :nth-child(3)": {
      opacity: 0,
      animation: {
        name: "fourthHexagonContentHorizontalLinesAnimations",
        duration: "1s",
        delay: 900,
        fillMode: "forwards"
      }
    },
    "& :nth-child(4)": {
      opacity: 0,
      animation: {
        name: "fourthHexagonContentHorizontalLinesAnimations",
        duration: "1s",
        delay: 1200,
        fillMode: "forwards"
      }
    },
    "& :nth-child(5)": {
      opacity: 0,
      animation: {
        name: "fourthHexagonContentHorizontalLinesAnimations",
        duration: "1s",
        delay: 1500,
        fillMode: "forwards"
      }
    }
  },

  "@keyframes fourthHexagonContentSideTextsAnimations": {
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
        name: "fourthHexagonContentSideTextsAnimations",
        duration: "1.5s",
        delay: 1000,
        fillMode: "forwards"
      }
    },
    "& :nth-child(2)": {
      opacity: 0,
      animation: {
        name: "fourthHexagonContentSideTextsAnimations",
        duration: "1.5s",
        delay: 1300,
        fillMode: "forwards"
      }
    }
  },

  "@keyframes fourthHexagonIconLinesAnimation": {
    from: {
      opacity: 0
    },
    to: {
      opacity: 0.9
    }
  },
  icon: {
    opacity: 0,
    animation: {
      name: "fourthHexagonIconLinesAnimation",
      duration: "1s",
      timingFunction: "linear",
      delay: 500,
      fillMode: "forwards"
    }
  },

  "@keyframes fourthHexagonCommunityLinesAnimation": {
    "0%": {
      strokeDashoffset: 1200,
      fillOpacity: 0
    },
    "80%": {
      strokeDashoffset: 0,
      fillOpacity: 0
    },
    "90%": {
      strokeDashoffset: 0,
      fillOpacity: 0
    },
    "100%": {
      strokeDashoffset: 0,
      fillOpacity: 0.9
    }
  },
  community: {
    strokeWidth: 1.5,
    strokeDasharray: 1200,
    strokeDashoffset: 1200,
    fill: "#fff",
    fillOpacity: 0,
    animation: {
      name: "fourthHexagonCommunityLinesAnimation",
      duration: "4.5s",
      timingFunction: "linear",
      delay: 700,
      fillMode: "forwards"
    }
  }
};

export default component => injectStyleSheet(styles)(component);
