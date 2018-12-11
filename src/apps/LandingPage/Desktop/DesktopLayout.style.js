import injectSheet from "react-jss";

const containerStyle = {
  // total container
  container: {
    background: {
      color: "green"
    },
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  //center Hexagon
  main_hex: {
    width: "80%",
    height: "100%",
    background: {
      color: "blue"
    }
  },
  left_side: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    height: "100%",
    // background: {
    //   color: "orange"
    // },
    justifyContent: "space-around"
  },
  right_side: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    height: "100%",
    // background: {
    //   color: "purple"
    // },
    justifyContent: "space-around"
  },
  first_hex: {
    width: "100%",
    height: "30%",
    background: {
      color: "white"
    }
  },
  second_hex: {
    width: "100%",
    height: "30%",
    background: {
      color: "white"
    }
  },
  three_hex: {
    width: "100%",
    height: "30%",
    background: {
      color: "white"
    }
  },
  four_hex: {
    width: "100%",
    height: "30%",
    background: {
      color: "white"
    }
  }
};

export default component => injectSheet(containerStyle)(component);
