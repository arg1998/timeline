import injectSheet from "react-jss";

const containerStyle = {
  rootContainer: {
    display: "flex",
    margin: [0, "auto"],
    height: 200,
    background: {
      color: "lightblue"
    },
    justifyContent: "space-between",
    alignItems: "center"
  },
  centerSquare: {
    width: "20%",
    display:'flex',
    flexDirection:'column',
    height: "100%",
    background: {
      color: "gray"
    },
    zIndex: 5,
    justifyContent:'space-between',
    alignItems:'center'
  },
  leftSquare: {
    width: "10%",
    height: "80%",
    background: {
      color: "yellow"
    },
    zIndex: 5
  },
  rightSquare: {
    width: "10%",
    height: "80%",
    background: {
      color: "brown"
    },
    zIndex: 5
  },
  bar: {
    position: "absolute",
    top: 100,
    height: 10,
    width: "100%",
    background: {
      color: "purple"
    },
    zIndex: 4
  },
  eyeContainer:{
    width:60,
    height:60,
    background:{
      color:'blue'
    }
  }
};

export default component => injectSheet(containerStyle)(component);
