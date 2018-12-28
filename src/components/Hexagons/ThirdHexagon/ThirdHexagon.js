import React from "react";
import pt from "prop-types";
import classNames from "classnames";
import ThirdHexagonStyles from "./ThirdHexagon.style";
import SvgGaussianBlur from "../../SvgGaussianBlur/SvgGaussianBlur";
import AnimatedBeehive from "../../AnimatedComponents/AnimatedBeehive";
import AnimatedPathFill from "../../AnimatedComponents/AnimatedPathFill";
import AnimatedGroupOpacity from "../../AnimatedComponents/AnimatedGroupOpacity";

const ThirdHexagon = props => {
  // extracting needed variables from props
  const {
    active,
    classes,
    width,
    height,
    style,
    mainHexagon,
    beehiveStyles,
    timeLineStyle,
    humanStyle,
    onClick
  } = props;

  // getting beehives styles from props
  if (!beehiveStyles && beehiveStyles.length !== 3) {
    console.error("beehive styles for FirstHexagon is missing");
  }
  const [bh0, bh1, bh2] = beehiveStyles;

  return (
    <svg
      className={classNames({
        [classes.hoverAnimation]: !active
      })}
      viewBox="100 -10 710 650"
      width={width}
      height={height}
      style={style}
      onClick={onClick}
    >
      {/* beehive 0 */}
      <SvgGaussianBlur
        id="third_hexagon_beehive_0"
        blurRadius={bh0.blurRadius}
      />
      <AnimatedBeehive
        pose={active ? "activated" : "deactivated"}
        strokeDasharray={300}
        stroke={bh0.strokeColor}
        strokeWidth={bh0.strokeWidth}
        opacity={bh0.strokeOpacity}
        fill="none"
        strokeLinecap="square"
        filter="url(#third_hexagon_beehive_0)"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M328.1 81.36h-47.03l-23.64-42.78 23.4-42.49h47.03l23.64 42.5-23.4 42.77z" />
        <path d="M257.68 124h-47.04L187 81.22l23.4-42.5h47.03l23.64 42.5-23.4 42.78zm75 52.27h-47.04L262 133.5 285.4 91h47.03l23.64 42.49-23.4 42.78z" />
        <path d="M187.25 81.36H140.2l-23.64-42.78 23.4-42.49H187l23.64 42.5-23.4 42.77z" />
      </AnimatedBeehive>

      {/* beehive 1 */}
      <SvgGaussianBlur
        id="third_hexagon_beehive_1"
        blurRadius={bh1.blurRadius}
      />
      <AnimatedBeehive
        pose={active ? "activated" : "deactivated"}
        strokeDasharray={300}
        stroke={bh1.strokeColor}
        strokeWidth={bh1.strokeWidth}
        opacity={bh1.strokeOpacity}
        fill="none"
        strokeLinecap="square"
        filter="url(#third_hexagon_beehive_1)"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M649.82 249.91l14.57-26.46h47.04l23.64 42.49-23.4 42.78h-47.03l-21.5-38.92m-7.39 7.64l17.32 31.13-23.4 42.79h-47.03L559 308.57l2.43-4.41m150.25 90.61h-47.04L641 352l23.4-42.49h47.03L735.07 352l-23.4 42.78z" />
        <path d="M782.1 352.13h-47.03l-23.64-42.78 23.4-42.49h47.03l23.64 42.5-23.4 42.77z" />
      </AnimatedBeehive>

      {/* beehive 2 */}
      <SvgGaussianBlur
        id="third_hexagon_beehive_2"
        blurRadius={bh2.blurRadius}
      />
      <AnimatedBeehive
        pose={active ? "activated" : "deactivated"}
        strokeDasharray={300}
        stroke={bh2.strokeColor}
        strokeWidth={bh2.strokeWidth}
        opacity={bh2.strokeOpacity}
        strokeLinecap="square"
        filter="url(#third_hexagon_beehive_2)"
        fill="none"
      >
        <path d="M223.5 433.22l9.46 17-23.4 42.78h-47.03l-23.64-42.78 19.25-34.95M256.6 578.27h-47.03l-23.64-42.78 23.4-42.49h47.03L280 535.49l-23.4 42.78z" />
        <path d="M327.28 620.9h-47.03l-23.64-42.78L280 535.63h47.04l23.64 42.5-23.4 42.78z" />
      </AnimatedBeehive>

      {/* Main Hexagon */}
      <SvgGaussianBlur
        id="third_hexagon_main_center"
        blurRadius={mainHexagon.blurRadius}
      />
      <g
        stroke={mainHexagon.strokeColor}
        strokeWidth={mainHexagon.strokeWidth}
        strokeOpacity={mainHexagon.strokeOpacity}
        fill="none"
        strokeLinecap="square"
        filter="url(#third_hexagon_main_center)"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M234 180l-75 128.72L197 375" />
        <path d="M261 124l22.35-37h250L624 245" />
        <path d="M575 470l84-161.28L641 277" />
        <path d="M533.34 532H284.66L232 438" />
      </g>

      {/*lines and  rectangles */}
      <SvgGaussianBlur
        id="third_hexagon_lines_and_rectangles"
        blurRadius={timeLineStyle.blurRadius}
        floodColor="#B3FF03"
        floodOpacity={0.7}
      />

      <AnimatedPathFill
        pose={active ? "activated" : "deactivated"}
        pathSize={400}
        className={classes.lines}
        stroke={timeLineStyle.strokeColor}
        strokeOpacity={timeLineStyle.strokeOpacity}
        strokeWidth={timeLineStyle.strokeWidth}
        fill={timeLineStyle.fillColor}
        fillOpacity={timeLineStyle.fillOpacity}
        strokeLinecap="square"
        filter="url(#third_hexagon_lines_and_rectangles)"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M533.34 476H396" />
        <path d="M533.34 250H402" />
        <path d="M280 379h-26" />
        <path d="M395 123H254" />
        <path d="M396 437v202" />
        <path d="M396 9v235" />

        <path d="M534.88 250H661l-50.27 54H485.5l49.38-54z" />
        <path d="M535.88 475H662l-50.27 54H486.5l49.38-54z" />
        <path d="M251.61 379H125.5l50.27 54H301l-49.39-54z" />
        <path d="M251.61 122.27H125.5l50.27 54H301l-49.39-54z" />
      </AnimatedPathFill>

      {/* human */}
      <AnimatedGroupOpacity
        pose={active ? "activated" : "deactivated"}
        endOpacity={0.5}
        className={classes.human}
        stroke={humanStyle.strokeColor}
        strokeWidth={humanStyle.strokeWidth}
        strokeOpacity={humanStyle.strokeOpacity}
        fill="none"
        strokeLinecap="square"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M372.79 262h-45.02l-22.63-48.17 22.4-47.83h45.01l22.63 47.83-22.4 48.17z" />
        <path
          stroke={humanStyle.mouthColor}
          strokeWidth={humanStyle.mouthWidth}
          d="M336.47 238l5.06 6h18.3l5.06-6"
        />
        <path d="M383 246h15.66l30.52 108-30 82h-94.04l-32.96-82 28.96-108H318" />
        <path
          fill={humanStyle.eyeColor}
          stroke="none"
          d="M371.72 209.4h-6.58l-3.31-5.86 3.27-5.82h6.59l3.31 5.82-3.28 5.85zm-33.47 0h-6.58l-3.32-5.86 3.28-5.82h6.59l3.3 5.82-3.27 5.85z"
        />
      </AnimatedGroupOpacity>
    </svg>
  );
};

/******************************* PropTypes **************************************
 ***************** check default props for incoming data structures **************/

ThirdHexagon.propTypes = {
  width: pt.oneOfType([pt.number, pt.string]).isRequired,
  height: pt.oneOfType([pt.number, pt.string]).isRequired,
  style: pt.object,
  //optional styles and options for this hexagon
  mainHexagon: pt.object,
  beehiveStyles: pt.arrayOf(pt.object),
  timeLineStyle: pt.object,
  humanStyle: pt.object
};

ThirdHexagon.defaultProps = {
  beehiveStyles: [
    // first beehive
    {
      blurRadius: 3,
      strokeColor: "#70CBF2",
      strokeWidth: 7,
      strokeOpacity: 0.4
    },
    // second beehive
    {
      blurRadius: 3.5,
      strokeColor: "#70CBF2",
      strokeWidth: 3,
      strokeOpacity: 0.4
    },
    // third beehive
    {
      blurRadius: 4,
      strokeColor: "#70CBF2",
      strokeWidth: 3,
      strokeOpacity: 0.7
    }
  ],
  mainHexagon: {
    strokeColor: "#5c6298",
    strokeWidth: 14,
    strokeOpacity: 1,
    blurRadius: 3.5
  },
  timeLineStyle: {
    strokeColor: "#DDA602",
    strokeOpacity: 1,
    strokeWidth: 4,
    blurRadius: 6,
    fillColor: "none",
    fillOpacity: "none"
  },
  humanStyle: {
    strokeColor: "#70CBF2",
    strokeWidth: 9,
    strokeOpacity: 0.6,
    eyeColor: "#EA0D74",
    eyeOpacity: 1,
    mouthColor: "#70CBF2",
    mouthWidth: 3,
    mouthOpacity: 1
  }
};

export default ThirdHexagonStyles(ThirdHexagon);
