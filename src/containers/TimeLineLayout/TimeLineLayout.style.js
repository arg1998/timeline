import injectSheet from "react-jss";

const containerStyle = {
  timeLine: {
    background: "#01234c",
    padding: 50
  }
};

export default component => injectSheet(containerStyle)(component);
