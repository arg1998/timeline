import React, { Component } from "react";
import ZoomLevelIndicator from "../../containers/ZoomLevelIndicator/ZoomLevelIndicator";

export default class Play extends Component {
  state = { currentLevel: this.props.initialLevel };

  render() {
    return (
      <div style={{ width: 250, margin: "0 auto", position: "relative" }}>
        <ZoomLevelIndicator levelRange={[1, 10]} />
      </div>
    );
  }
}
