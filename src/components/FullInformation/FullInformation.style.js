import injectSheet from "react-jss";

const styles = {
  rootContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(30,50,70,0.98)",
    paddingTop: 40,
    overflowX: "scroll",
    borderLeft: "4px solid #283",
    position: "relative"
  },
  close: {
    userSelect: "none",
    margin: 10,
    width: 64,
    height: 64,
    borderRadius: "50%",
    position: "absolute",
    right: 20,
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 32,
    color: "#912",
    border: "2px #712 solid",
    backgroundColor: "rgba(0,0,0,0)",
    transition: "background-color 500ms, color 500ms",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,9)",
      color: "#eee"
    }
  },
  title: {
    padding: 0,
    margin: "10px 20px",
    color: "rgba(255,255,255,0.9)",
    fontFamily: "Scope One",
    fontSize: 26
  },
  date: {
    color: "#999",
    fontSize: 16,
    display: "inline-block",
    margin: "10px 20px",
    marginBottom: 40
  },
  image: {
    width: "80%",
    display: "block",
    margin: "0 auto"
  },
  description: {
    fontFamily: "Philosopher",
    color: "rgba(200,230,200,1)",
    fontSize: 24,
    margin: "25px 20px"
  }
};

export default component => injectSheet(styles)(component);
