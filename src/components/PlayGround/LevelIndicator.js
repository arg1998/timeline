import React, { Component } from "react";
import propType from "prop-types";
import ZoomStyle from "./LevelIndicator.style";

class LevelIndicator extends Component {
  state = {
    level: this.props.initialLevel,
    levelRange: this.props.levelRange,
    leftSideDisable: false,
    rightSideDisable: false
  };
  //[start,end]
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
  render() {
    const {
      classes,
      initialLevel,
      onVolumeUp,
      onVolumeDown,
      onToggle,
      shouldToggle,
      initialToggleState,
      levelRange,
      onLevelChange
    } = this.props;
    return (
      <div className={classes.rootContainer}>
        <div className={classes.bar} />
        <div
          className={classes.leftSquare}
          onClick={this.onVolumeDownHandler}
        />
        <div
          className={classes.centerSquare}
          onClick={shouldToggle ? onToggle : null}
        >
          <p>{this.state.level}</p>
          <div className={classes.eyeContainer} />
        </div>
        <div className={classes.rightSquare} onClick={this.onVolumeUpHandler} />
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
  initialToggleState: propType.bool,
  levelRange: propType.array,
  onLevelChange: propType.func
};
LevelIndicator.defaultProps = {
  initialLevel: 1,
  shouldToggle: true,
  levelRange: [0, 10],
  onLevelChange: () => null,
  onVolumeUp: () => null
};
export default ZoomStyle(LevelIndicator);
