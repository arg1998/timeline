import React, { Component } from "react";
import { connect } from "react-redux";
import { handleScreenSizeChange } from "./redux/actions";
import DesktopLayout from "./apps/LandingPage/Desktop/DesktopLayout";

class App extends Component {
  componentDidMount() {
    //attaching the relevant ACTION DISPATCHER to the RESIZE event
    window.addEventListener("resize", this.props.screenSizeChangeHandler);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.props.screenSizeChangeHandler);
  }

  render() {
    const { isDesktop } = this.props;
    let layout = null;

    if (isDesktop) {
      layout = <DesktopLayout />;
    } else {
      layout = <p>Mobile</p>;
    }

    return layout;
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
