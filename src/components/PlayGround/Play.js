import React, { Component } from "react";
import LevelIndicator from "./LevelIndicator";

export default class Play extends Component {
  state = { currentLevel: this.props.initialLevel };

  render() {
    return (
      <div>
        <LevelIndicator
          initialLevel={5}
          onVolumeUp={() => console.log("test on volume up")}
          levelRange={[5, 12]}
          onVolumeDown={() => console.log("test on volume down")}
          onToggle={() => console.log("On Toggle")}
        />
      </div>
    );
  }
}
