import React, { Component } from "react";
import { connect } from "react-redux";
import { handleScreenSizeChange } from "./redux/actions";

class App extends Component {
  componentDidMount() {
    //attaching the relevant ACTION DISPATCHER to the RESIZE event
    window.addEventListener("resize", this.props.screenSizeChangeHandler);
  }
  componentWillUnmount() {
    window.removeEventListener("resize");
  }

  render() {
    return <p>{`Screen is ${this.props.isDesktop ? "Desktop" : "Mobile"}`}</p>;
  }
}

const mapStateToProps = newState => ({
  isDesktop: newState.globalConfigs.screen.isDesktop
});

const mapDispatchToProps = dispatch => ({
  screenSizeChangeHandler: () => dispatch(handleScreenSizeChange()) 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
