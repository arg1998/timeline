import React, { Component } from "react";
import propType from "prop-types";
import ZoomStyle from "./ZoomLevelIndicator.style";
import ZoomVolume from "../../components/ZoomHandles/ZoomVolume/ZoomVolume";
import ZoomIndicator from "../../components/ZoomHandles/ZoomIndicator/ZoomIndicator";

class LevelIndicator extends Component {
  state = {
    level: this.props.initialLevel,
    levelRange: this.props.levelRange,
    leftSideDisable: false,
    rightSideDisable: false,
    show: this.props.initialShowState
  };

  onVolumeUpHandler = () => {
    if (this.state.levelRange.length === 2) {
      if (this.state.level === this.state.levelRange[1]) {
        this.setState({ rightSideDisable: true });
      } else {
        this.setState(
          prev => ({ level: prev.level + 1 }),
          () => this.props.onLevelChange(this.state.level)
        );
        this.props.onVolumeUp();
      }
    }
  };

  onVolumeDownHandler = () => {
    if (this.state.levelRange.length === 2) {
      if (this.state.level === this.state.levelRange[0]) {
        this.setState({ leftSideDisable: true });
      } else {
        this.setState(
          prev => ({ level: prev.level - 1 }),
          () => this.props.onLevelChange(this.state.level)
        );
        this.props.onVolumeDown();
      }
    }
  };

  onToggleHandler = () => {
    if (this.props.shouldToggle) {
      this.setState(
        prevState => ({ show: !prevState.show }),
        () => this.props.onToggle(this.state.level)
      );
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.rootContainer}>
        {/* horizontal bar */}
        <div className={classes.bar} />

        {/* left handle */}
        <div className={classes.leftSquare} onClick={this.onVolumeDownHandler}>
          <ZoomVolume sign="-" />
        </div>
        {/* zoom Level indicator */}
        <div className={classes.centerSquare} onClick={this.onToggleHandler}>
          <ZoomIndicator level={this.state.level} show={this.state.show} />
        </div>

        {/* right handle */}
        <div className={classes.rightSquare} onClick={this.onVolumeUpHandler}>
          <ZoomVolume sign="+" />
        </div>
      </div>
    );
  }
}
LevelIndicator.propTypes = {
  initialLevel: propType.number.isRequired,
  onVolumeUp: propType.func,
  onVolumeDown: propType.func,
  onToggle: propType.func,
  shouldToggle: propType.bool,
  initialShowState: propType.bool,
  levelRange: propType.array,
  onLevelChange: propType.func
};
LevelIndicator.defaultProps = {
  initialLevel: 1,
  initialShowState: true,
  shouldToggle: true,
  levelRange: [0, 10],
  onToggle: () => null,
  onLevelChange: () => null,
  onVolumeUp: () => null,
  onVolumeDown: () => null
};
export default ZoomStyle(LevelIndicator);
