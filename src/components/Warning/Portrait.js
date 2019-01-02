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
        alignItems: "center",
        backgroundColor: "lightblue"
      }}
    >
      <img src={mobile} style={{ width: 300, height: 400 }} />
    </div>
  );
}
export default Portrait;
