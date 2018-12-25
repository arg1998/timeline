import injectStyleSheet from "react-jss";

const styles = {
  "@keyframes thirdHexagonContentTitleAnimation": {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1,
      transform: ["translateY(0)", "translateX(0)"]
    }
  },
  title: {
    transform: ["translateY(50px)", "translateX(50px)"],
    opacity: 0,
    animation: {
      name: "thirdHexagonContentTitleAnimation",
      duration: "1.2s",
      delay: 200,
      fillMode: "forwards"
    }
  },

  "@keyframes thirdHexagonContentHorizontalLinesAnimations": {
    from: {
      transform: "translateY(25px)",
      opacity: 0
    },
    to: {
      transform: "translateY(0)",
      opacity: 1
    }
  },
  "@keyframes thirdHexagonContentVerticalLinesAnimations": {
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
        name: "thirdHexagonContentVerticalLinesAnimations",
        duration: "1s",
        delay: 400,
        fillMode: "forwards"
      }
    },
    "& :nth-child(2)": {
      opacity: 0,
      animation: {
        name: "thirdHexagonContentHorizontalLinesAnimations",
        duration: "1s",
        delay: 900,
        fillMode: "forwards"
      }
    },
    "& :nth-child(3)": {
      opacity: 0,
      animation: {
        name: "thirdHexagonContentHorizontalLinesAnimations",
        duration: "1s",
        delay: 1300,
        fillMode: "forwards"
      }
    },
    "& :nth-child(4)": {
      opacity: 0,
      animation: {
        name: "thirdHexagonContentHorizontalLinesAnimations",
        duration: "1s",
        delay: 1500,
        fillMode: "forwards"
      }
    }
  },

  "@keyframes thirdHexagonContentSideTextsAnimations": {
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
        name: "thirdHexagonContentSideTextsAnimations",
        duration: "1.5s",
        delay: 1000,
        fillMode: "forwards"
      }
    },
    "& :nth-child(2)": {
      opacity: 0,
      animation: {
        name: "thirdHexagonContentSideTextsAnimations",
        duration: "1.5s",
        delay: 1300,
        fillMode: "forwards"
      }
    }
  },

  "@keyframes thirdHexagonNotebookLinesAnimation": {
    from: {
      strokeDashoffset: 80
    },
    to: {
      strokeDashoffset: 0
    }
  },
  notebookLines: {
    strokeDashoffset: 80,
    "& :nth-child(1)": {
      strokeDasharray: 80,
      animation: {
        name: "thirdHexagonNotebookLinesAnimation",
        duration: "2s",
        timingFunction: "linear",
        delay: 500,
        fillMode: "forwards"
      }
    },
    "& :nth-child(2)": {
      strokeDasharray: 80,
      animation: {
        name: "thirdHexagonNotebookLinesAnimation",
        duration: "2s",
        timingFunction: "linear",
        delay: 1000,
        fillMode: "forwards"
      }
    },
    "& :nth-child(3)": {
      strokeDasharray: 80,
      animation: {
        name: "thirdHexagonNotebookLinesAnimation",
        duration: "2s",
        timingFunction: "linear",
        delay: 1500,
        fillMode: "forwards"
      }
    },
    "& :nth-child(4)": {
      strokeDasharray: 80,
      animation: {
        name: "thirdHexagonNotebookLinesAnimation",
        duration: "2s",
        timingFunction: "linear",
        delay: 2000,
        fillMode: "forwards"
      }
    }
  },
  "@keyframes thirdHexagonIconLinesAnimation": {
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
      name: "thirdHexagonIconLinesAnimation",
      duration: "1s",
      timingFunction: "linear",
      delay: 500,
      fillMode: "forwards"
    }
  }
};

export default component => injectStyleSheet(styles)(component);
