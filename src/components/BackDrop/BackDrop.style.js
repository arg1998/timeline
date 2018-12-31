import injectSheet from "react-jss";

const containerStyle = {
  backdrop: ({ color, opacity }) => ({
    top: 0,
    left: 0,
    position: "fixed",
    width: "100%",
    height: "100%",
    background: {
      color,
      opacity
    },
    zIndex: 100
  })
};

export default component => injectSheet(containerStyle)(component);
