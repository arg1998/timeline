import React from "react";

const BarIconHexagon = props => {
  const { classes, active, centerColor, borderColor } = props;
  return (
    <svg
      style={{
        isolation: "isolate"
      }}
      viewBox="0 0 450 400"
      width="100%"
      height="100%"
    >
      <g>
        {/* outer Hexagon */}
        <path
          style={{ zIndex: 5 }}
          fill={borderColor || "#7e7f74"}
          d="M447.006 188.747L345.628 11.249C341.667 4.294 334.309 0 326.356 0H123.628c-7.949 0-15.311 4.295-19.271 11.249L2.992 188.747a22.656 22.656 0 0 0 0 22.507L104.357 388.75c3.96 6.954 11.321 11.25 19.271 11.25h202.728c7.952 0 15.31-4.296 19.272-11.25l101.378-177.496a22.651 22.651 0 0 0 0-22.507zm-120.65 188.428H126.447l-99.156-177.18 99.156-175.032h197.402l104.614 175.032-102.107 177.18z"
        />
        <path
          fill={centerColor || "#00665c"}
          d="M185.414 129.19l-39.584 70.808 39.584 70.812h79.164l39.591-70.812-39.591-70.808h-79.164z"
        />
      </g>
    </svg>
  );
};

export default BarIconHexagon;
