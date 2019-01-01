import injectSheet from "react-jss";

const containerStyle = {
  backdrop: ({ color, opacity, open }) => ({
    top: 0,
    left: 0,
    display: open ? "block" : "none",
    position: "fixed",
    width: "100%",
    height: "100%",
    background: color || `rgba(0,0,0,${opacity || 0.4})`,
    zIndex: 100
  })
};

export default component => injectSheet(containerStyle)(component);
