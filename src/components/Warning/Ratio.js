import React from "react";
import warning from "../../res/images/warning.svg";

function Ratio() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={warning} style={{ width: 300, height: 400 }} />
    </div>
  );
}
export default Ratio;
