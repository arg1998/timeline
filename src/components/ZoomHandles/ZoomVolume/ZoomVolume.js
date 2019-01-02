import React from "react";
import pt from "prop-types";

const ZoomVolume = props => {
  const { sign, classes } = props;

  return (
    <svg viewBox="0 0 160 150" width="100%" height="100%">
      <g>
        <path
          d="M119.115 150h-80l-19.558-38.598L0 73.902l20.443-36.951L40.885 0h80l19.558 38.598L160 76.098l-20.443 36.951L119.115 150z"
          fill="#00665c"
        />
        <g fill="#000">
          <path d="M40 70.951h80v8.098H40z" />
          {sign === "+" && <path d="M75.951 115V35h8.098v80z" />}
        </g>
      </g>
    </svg>
  );
};

ZoomVolume.propTypes = {
  sign: pt.oneOf(["+", "-"])
};

ZoomVolume.defaultProps = {
  sign: "+"
};

export default ZoomVolume;
