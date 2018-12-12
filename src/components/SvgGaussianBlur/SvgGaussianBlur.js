import React from "react";
import propTypes from "prop-types";

function SvgGaussianBlur(props) {
  const { id, blurRadius, floodColor, floodOpacity } = props;
  let dropShadow = null;
  if (floodColor && floodOpacity) {
    dropShadow = (
      <>
        <feOffset
          xmlns="http://www.w3.org/2000/svg"
          result="pf_100_offsetBlur"
        />
        <feFlood
          xmlns="http://www.w3.org/2000/svg"
          floodColor="#B3FF03"
          floodOpacity={1}
        />
        <feComposite
          xmlns="http://www.w3.org/2000/svg"
          in2="pf_100_offsetBlur"
          operator="in"
          result="pf_100_dropShadow"
        />
        <feBlend
          xmlns="http://www.w3.org/2000/svg"
          in="SourceGraphic"
          in2="pf_100_dropShadow"
        />
      </>
    );
  }

  return (
    <defs>
      <filter
        id={id}
        width="400%"
        height="400%"
        x="-200%"
        y="-200%"
        colorInterpolationFilters="sRGB"
        filterUnits="objectBoundingBox"
      >
        <feGaussianBlur
          xmlns="http://www.w3.org/2000/svg"
          in="SourceGraphic"
          stdDeviation={blurRadius}
        />
        {dropShadow}
      </filter>
    </defs>
  );
}

/******************************* PropTypes **************************************
 ***************** check default props for incoming data structures **************/

SvgGaussianBlur.propTypes = {
  id: propTypes.string.isRequired,
  blurRadius: propTypes.number.isRequired,
  floodColor: propTypes.string,
  floodOpacity: propTypes.number
};

SvgGaussianBlur.defaultProps = {
  floodColor: undefined,
  floodOpacity: undefined
};

export default SvgGaussianBlur;
