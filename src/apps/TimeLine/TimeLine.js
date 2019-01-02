import React, { Component } from "react";
import classNames from "classnames";
import TimeLineLayout from "../../containers/TimeLineLayout/TimeLineLayout";
import withSizes from "react-sizes";
import TimeLineStyle from "./TimeLine.style";
import bp from "../../utils/BreakPoints";
import TimeLineEvent from "../../components/TimeLineEvent/TimeLineEvent";
import fakeData from "../../res/FakeJsonData";
import ZoomLevelIndicator from "../../containers/ZoomLevelIndicator/ZoomLevelIndicator";
import ParticleBackground from "../../components/ParticleBackground/ParticleBackground";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import FullInformation from "../../components/FullInformation/FullInformation";

const SCROLL_THRESHOLD = 64;

class TimeLine extends Component {
  state = {
    scrolled: false,
    isRightDrawerOpen: true
  };
  _onScrollHandler = () => {
    if (window.scrollY >= SCROLL_THRESHOLD && this.state.scrolled === false) {
      this.setState({ scrolled: true });
    } else if (
      window.scrollY < SCROLL_THRESHOLD &&
      this.state.scrolled === true
    ) {
      this.setState({ scrolled: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this._onScrollHandler);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this._onScrollHandler);
  }
  _onDrawerCloseHandler = () => this.setState({ isRightDrawerOpen: false });
  render() {
    const { isDesktop, classes } = this.props;

    return (
      <>
        <SideDrawer
          isDesktop={isDesktop}
          open={this.state.isRightDrawerOpen}
          side="right"
          onClose={this._onDrawerCloseHandler}
        >
          <FullInformation
            {...fakeData[1]}
            onClose={this._onDrawerCloseHandler}
          />
        </SideDrawer>
        <div>
          {/* the FUCKING Zoom Level Indicator */}
          <div
            className={classNames({
              [classes.zoomLevelIndicatorContainer]: true,
              [classes.zoomLevelIndicatorContainerAnim]: this.state.scrolled
            })}
          >
            <div className={classes.zoomLevelIndicator}>
              <ZoomLevelIndicator levelRange={[1, 9]} />
            </div>
          </div>
          {/* Particle background  */}
          <ParticleBackground count={isDesktop ? 40 : 15} touch={isDesktop} />
          <TimeLineLayout isDesktop={isDesktop}>
            {fakeData.map((e, i) => (
              <TimeLineEvent
                key={e.key}
                isDesktop={isDesktop}
                index={i}
                eventData={e}
              />
            ))}
          </TimeLineLayout>
        </div>
      </>
    );
  }
}

const mapSizesToProps = ({ width, height }) => ({
  isDesktop: width > bp.desktop.minWidth,
  screen: { w: width, h: height }
});

export default withSizes(mapSizesToProps)(TimeLineStyle(TimeLine));
