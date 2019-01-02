import injectSheet from "react-jss";

const containerStyle = {
  sideDrawer: ({ isDesktop, width }) => ({
    height: "100%",
    position: "fixed",
    top: 0,
    width: isDesktop ? width || "40%" : width || "100%",
    zIndex: 200,
    transition: "left 700ms, right 700ms"
  }),
  leftSide: {
    left: 0
  },
  rightSide: {
    right: 0
  },
  open: ({ side }) => ({ [side]: 0 }),
  close: ({ side }) => ({ [side]: "-100%" })
};

export default component => injectSheet(containerStyle)(component);
