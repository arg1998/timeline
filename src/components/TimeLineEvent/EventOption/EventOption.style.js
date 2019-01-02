import injectSheet from "react-jss";

const style = {
  eventOption: {
    width: 64,
    height: 64,
    padding: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    "&:hover": {
      background: "rgba(10,10,10,0.8)",
      border: "1px solid #436",
      borderRadius: '50%'
    },
    "&:hover $imageStyle": {
      width: "115%",
      height: "115%"
    }
  },
  imageStyle: {
    width: "80%",
    height: "80%"
  }
};

export default component => injectSheet(style)(component);
