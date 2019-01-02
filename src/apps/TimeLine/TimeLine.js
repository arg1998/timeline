import React, { Component } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import TimeLineLayout from "../../containers/TimeLineLayout/TimeLineLayout";
import withSizes from "react-sizes";
import TimeLineStyle from "./TimeLine.style";
import bp from "../../utils/BreakPoints";
import TimeLineEvent from "../../components/TimeLineEvent/TimeLineEvent";
import ZoomLevelIndicator from "../../containers/ZoomLevelIndicator/ZoomLevelIndicator";
import ParticleBackground from "../../components/ParticleBackground/ParticleBackground";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import FullInformation from "../../components/FullInformation/FullInformation";
import {
  closeFullInfoDrawer,
  loadLevel,
  toggleLevelState,
  selectEvent
} from "../../redux/actions";

const SCROLL_THRESHOLD = 64;

class TimeLine extends Component {
  state = {
    scrolled: false,
    activeEventIndex: -1
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

  _onLevelChangeHandler = newLevel => {
    // fetch new level
    this.props.fetchLevel(newLevel);
  };

  _onDrawerCloseHandler = () => {
    // request drawer close event
    this.props.closeFullInfoDrawer();
  };

  _onZoomToggleHandler = toggleLevel => {
    // request toggle level event
    this.props.toggleZoomLevelIndicator(toggleLevel);
  };

  _onFullInfoRequestHandler = index => {
    // request to open side drawer to show full information
    this.props.openFullInfoDrawer(index);
  };

  _onEventActivated = index => {
    this.setState({ activeEventIndex: index });
  };

  componentDidMount() {
    this.props.fetchLevel(1);
    window.addEventListener("scroll", this._onScrollHandler);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this._onScrollHandler);
  }

  render() {
    const {
      isDesktop,
      classes,
      isRightDrawerOpen,
      eventData,
      selected_index,
      config
    } = this.props;

    return (
      <>
        <SideDrawer
          isDesktop={isDesktop}
          open={isRightDrawerOpen}
          side="right"
          shouldCloseOnBackDropClick={true}
          onClose={this._onDrawerCloseHandler}
        >
          <FullInformation
            eventData={
              isRightDrawerOpen ? eventData[selected_index] : undefined
            }
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
              <ZoomLevelIndicator
                onLevelChange={this._onLevelChangeHandler}
                onToggle={this._onZoomToggleHandler}
                initialShowState={false}
                levelRange={[1, config.max_range || 2]}
              />
            </div>
          </div>
          {/* Particle background  */}
          <ParticleBackground count={isDesktop ? 40 : 15} touch={isDesktop} />

          {/* TimeLine Layout  */}
          <TimeLineLayout isDesktop={isDesktop}>
            {eventData.map((e, i) => (
              <TimeLineEvent
                key={e.key}
                isDesktop={isDesktop}
                active={this.state.activeEventIndex === i}
                onActive={this._onEventActivated}
                index={i}
                eventData={e}
                config={config}
                onFullInfoClick={this._onFullInfoRequestHandler}
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

const mapStateToProps = newState => ({
  config: newState.timeline.config,
  selected_index: newState.timeline.selected_index, // selected event by user
  isRightDrawerOpen: newState.timeline.selected_index !== -1, //should right drawer open
  eventData: newState.timeline.buffer
});
const mapDispatchToProps = dispatch => ({
  toggleZoomLevelIndicator: toggleLevel =>
    dispatch(toggleLevelState(toggleLevel)),
  fetchLevel: newLevel => dispatch(loadLevel(newLevel)),
  openFullInfoDrawer: event_index => dispatch(selectEvent(event_index)),
  closeFullInfoDrawer: () => dispatch(closeFullInfoDrawer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSizes(mapSizesToProps)(TimeLineStyle(TimeLine)));
