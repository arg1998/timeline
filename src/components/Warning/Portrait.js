import React from "react";
import mobile from "../../res/images/mobile.svg";

function Portrait() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <img src={mobile} style={{ width: 300, height: '80%' }} />
    </div>
  );
}
export default Portrait;
