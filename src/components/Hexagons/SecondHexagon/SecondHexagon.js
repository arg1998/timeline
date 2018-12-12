import React from "react";
import pt from "prop-types";
import SvgGaussianBlur from "../../SvgGaussianBlur/SvgGaussianBlur";

const SecondHexagon = props => {
  // extracting needed variables from props
  const {
    width,
    height,
    style,
    mainHexagon,
    beehiveStyles,
    earthStyle,
    worldEventsLineStyle: WELS,
    rectangleStyle
  } = props;

  // getting beehives styles from props
  if (!beehiveStyles && beehiveStyles.length !== 3) {
    console.error("beehive styles for FirstHexagon is missing");
  }
  const [bh0, bh1, bh2] = beehiveStyles;

  return (
    <svg
      viewBox="-28.9 -17.7 649.4 635.4"
      width={width}
      height={height}
      style={style}
    >
      {/* main hexagon */}
      <SvgGaussianBlur
        id="second_hexagon_main_hexagon"
        blurRadius={mainHexagon.blurRadius}
      />
      <path
        stroke={mainHexagon.strokeColor}
        strokeWidth={mainHexagon.strokeWidth}
        strokeOpacity={mainHexagon.strokeOpacity}
        fill="none"
        strokeLinejoin="round"
        d="M488.86 376.22l-80.9 141.74H182.04L69.11 318.89l112.93-199.05h225.92l110.71 197.32"
        filter="url(#second_hexagon_main_hexagon)"
      />

      {/* beehive 0 */}
      <SvgGaussianBlur
        id="second_hexagon_beehive_0"
        blurRadius={bh0.blurRadius}
      />
      <g
        stroke={bh0.strokeColor}
        strokeOpacity={bh0.strokeOpacity}
        strokeWidth={bh0.strokeWidth}
        fill="none"
        strokeLinejoin="round"
        filter="url(#second_hexagon_beehive_0)"
      >
        <path d="M409.77 38.16L431 76.3l-21.23 38.16H367.3L346.06 76.3l21.24-38.15h42.47z" />
        <path d="M346.06 0l21.24 38.16-21.24 38.15h-42.47l-21.23-38.15L303.59 0h42.47zm58.31 125.83L425.6 164l-21.23 38.16h-42.48L340.66 164l21.23-38.16h42.48z" />
      </g>

      {/* beehive 1 */}
      <SvgGaussianBlur
        id="second_hexagon_beehive_1"
        blurRadius={bh1.blurRadius}
      />
      <g
        stroke={bh1.strokeColor}
        strokeWidth={bh1.strokeWidth}
        strokeOpacity={bh1.strokeOpacity}
        fill="none"
        strokeLinejoin="round"
        filter="url(#second_hexagon_beehive_1)"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M404.37 435.38l21.23 38.16-21.23 38.16h-42.48l-21.23-38.16 21.23-38.16h42.48z" />
        <path
          d="M412.93 523.69l21.24 38.15L412.93 600h-42.47l-21.23-38.16 21.23-38.15h42.47z"
          vectorEffect="non-scaling-stroke"
        />
        <path d="M475.75 485.48L497 523.64l-21.24 38.16h-42.47l-21.23-38.16 21.23-38.16h42.47z" />
      </g>

      {/* beehive 2 */}
      <g
        stroke={bh2.strokeColor}
        strokeWidth={bh2.strokeWidth}
        strokeOpacity={bh2.strokeOpacity}
        fill="none"
        strokeLinejoin="round"
        filter="url(#second_hexagon_beehive_1)"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M141.41 279l21.24 38.16-21.24 38.16H98.94l-21.23-38.16L98.94 279h42.47zM63.7 238.3l21.24 38.15L63.7 314.6H21.23L0 276.45l21.23-38.16H63.7zm0 78.86l21.24 38.16-21.24 38.16H21.23L0 355.32l21.23-38.16H63.7z" />
      </g>

      {/* earth */}
      <g opacity={earthStyle.fillOpacity} vectorEffect="non-scaling-stroke">
        <SvgGaussianBlur
          id="second_hexagon_earth"
          blurRadius={earthStyle.blurRadius}
          floodColor="#4FFFE7"
          floodOpacity={1}
        />

        <path
          fill={earthStyle.fillColor}
          stroke={earthStyle.strokeColor}
          strokeWidth={earthStyle.strokeWidth}
          strokeOpacity={earthStyle.strokeOpacity}
          d="M460.5 302.12a159.71 159.71 0 0 0-2.47-14.42 158.73 158.73 0 0 0-36.48-71.42 162.42 162.42 0 0 0-39.67-32.54c-2.49-1.46-5.02-2.84-7.6-4.16-.58-1.03-8.81-4.28-11.67-5.47a162.1 162.1 0 0 0-58.11-12.38c-1.5-.04-3-.11-4.5-.11-3.2 0-6.37.12-9.52.3a161.97 161.97 0 0 0-68.77 19.78 161.7 161.7 0 0 0-70.69 77.71 157.94 157.94 0 0 0-12.77 62.35c0 88.3 72.56 160.15 161.76 160.15 89.19 0 161.74-71.85 161.74-160.15 0-6.65-.46-13.2-1.26-19.64zm-8.88-6.56c-2.04-.5-4.15-1.9-6.5-5-6.33-8.36-24.7-36.2-18.19-32.81 6.5 3.37 21.94 22.2 21.94 32.33 0 0 .56.18 1.73.1.38 1.78.7 3.58 1.02 5.38zM300 474.18c-84.89 0-153.96-68.38-153.96-152.42 0-18.5 3.35-36.22 9.48-52.64.38 1.04.75 2.12 1.12 3.26 2.93 9.17 18.28 12.07 23.4 11.1 5.11-.96 3.41 3.14 8.28 4.59 4.88 1.45 8.78 6.27 14.63 12.3 5.85 6.04 12.1 3.23 12.1 3.23s-.65 6.43-2.28 8.36c-1.62 1.93-10.4-3.86-2.6 22.2 7.8 26.06 19.5 22.2 22.1 24.13 2.6 1.93.33 25.74-.64 37-.98 11.26-.66 18.01 2.92 43.1 3.57 25.1 19.17 16.74 21.44 13.2 2.27-3.54-7.8-2.9-8.44-6.44-.66-3.54-1.95-9 1.62-12.54 3.57-3.54-1.62-3.54-3.25-5.15-1.62-1.6 3.9-13.2 6.5-17.05 2.6-3.86 7.8-3.54 9.33-5.47 1.53-1.93 5.62-7.08 10.82-10.98 5.2-3.9 5.85-14.44 6.82-18.3.98-3.86 10.4-6.76 14.3-9 3.9-2.26 2.6-14.17 2.92-18.03.33-3.86 7.48-9.65 8.78-15.12 1.3-5.47-7.47-8.36-12.68-10.3-5.2-1.92-9.09-3.85-18.2-4.82-9.1-.96-4.54-11.9-13-12.87-8.44-.96-4.21-.64-8.44-4.5-4.23-3.86-5.2-5.47-11.7-5.72-6.5-.25-9.42-1.04-13-2.33-3.57-1.29-10.4 4.83-10.4 4.83s-2.17 2.03-2.78 2.21c-.6.18-2.56-.84-3.53-1.81-.97-.96-2.62 1.93-4.02 1.45-1.4-.48-2.86-3.98-4.57-5.07-1.7-1.08.73-4.82-.85-9.17-1.6-4.34-7.07-.72-10.24-1.56-3.17-.85 2.07-7.49 3.53-10.02 1.46-2.53-1.83-2.53-4.63-2.3-2.8.25-4.27 6.16-8.66 5.68-4.38-.48-5.72-2.17-5.48-5.67.25-3.5-3.53-4.35-.24-13.03 3.3-8.69 13.77-4.95 16.2-6.16 2.45-1.2 6.34-.96 11.47.49 5.12 1.44 4.14 6.75 4.38 8.68.25 1.93 1.95-6.75 1.46-12.06-.48-5.31 8.05-6.03 11.95-9.42 3.9-3.38 6.33-10.85 8.28-14 1.95-3.13 6.58-3.61 7.8-7.23 1.22-3.62 7-4.77 7.8-5.37.8-.6 2.01.3 1.22 2.17-.8 1.87 1.7 1.5 3.66 0 1.94-1.51 9.09-5.65 7.71-6.78-1.38-1.12-2.03 1.13-3.5.81-1.46-.32-2.68-1.61-3.32-3.13-.66-1.53.97-2.1-.4-3.87-1.4-1.76-2.86-2.49-1.06-3.77 1.78-1.3 9.9.64 13.32-.17 3.4-.8 3.9-1.44 3.74.17-.16 1.6-2.85 5.46-3.82 6.67-.98 1.2 9.01 2.41 11.46 2.41 2.44 0-.74-5.55-3.9-7.24-3.17-1.68.24-7.24-.74-10.8-.97-3.55-7.56-7.94-8.2-10.03-.33-1.06-.7-3.3-1.17-5.53a155.27 155.27 0 0 1 33.7-4.88c1.59 2.09 3.16 3.04 4.51 1.56.43-.47.86-1.05 1.29-1.7 29 .07 56.16 8.11 79.32 22.04l-2.57.4s-3.05-3.05-4.68-1.92c-1.62 1.12-3.65 1.68-5.85 3.21-2.19 1.53-6.9 5.55-7.87 7.56-.98 2.02-3.42 3.95-7.31 4.91-3.9.97-7.32 1.13-5.61 2.25 1.7 1.13 5.77 2.82 5.77 6.12 0 3.3 1.13 6.03-.65 6.52-1.8.48-10.4-1.13-12.03 2.25a27.57 27.57 0 0 0-2.6 9.81c-.16 2.74-.48 5.31 4.88 5.15 5.36-.16 8.93-1.14 10.72-2.26 1.78-1.12 1.3-3.37 4.39-6.43 3.08-3.05 4.06-1.76 4.22-4.34.17-2.57-.49-5.3 1.46-4.82 1.95.48 3.74-1.78 5.85-.81 2.12.96 3.41-2.41 6.67 1.13 3.25 3.54 6.98 5.79 7.95 7.88.98 2.09 4.4 3.38 3.26 6.11-1.14 2.73 3.41-4.9 3.16-7.08-.24-2.17-4.63-5.3-5.2-6.19-.56-.88-3.5-5.7-.16-4.58 3.33 1.12 8.2 5.7 8.45 7.48.24 1.77 2.52 7.72 4.47 10.13 1.95 2.41 4.63 3.3 4.87 3.22.24-.08-1.38-5.8-.16-8.29 1.22-2.5 3.98-3.54 5.12-2.9 1.13.65 1.3 1.78 2.6.97 1.3-.8 3-1.6 2.76-4.02-.18-1.75.16-3.79.6-5.3 2.18 2.3 4.3 4.62 6.33 7.04-4.47.77-11.08 2.14-10.83 5.25.32 4.03 4.06 10.14 10.4 8.37 6.33-1.77 8.37-1.37 9.1 0 .73 1.37 1.46 10.3-5.77 11.34 0 0-22.1-3.53-24.38-4.18-4.21-.64-1.94 4.83-1.94 6.12 0 1.28-18.2-3.33-18.2-6.17 0-2.85 6.82-10.56-12.03-7.67-18.84 2.9-24.04 6.56-28.92 14.06-4.87 7.5-16.57 10.07-15.92 23.9.65 13.84-2.6 15.13 5.53 22.53 8.12 7.4 8.12 13.82 31.2 7.4 23.06-6.44 9.09-.52 11.37 2.63 2.27 3.16 6.5.26 7.15 3.15.64 2.9-4.56 8.69.64 14.48 5.2 5.8 8.13 20.27 5.2 24.13-2.92 3.86 3.58 12.23 2.6 20.6-.97 8.36 6.34 9.33 7.64 15.6 1.3 6.27 4.71 11.9 20.64 3.86 15.92-8.04 7.8-15.6 12.18-17.53 4.39-1.94 1.8-10.78 7.31-14.16 5.53-3.38 12.68-5.15 8.45-21.24-4.22-16.08 4.23-16.08 11.05-23 .82-.83 1.69-1.77 2.57-2.79.24 3.47.4 6.97.4 10.5 0 84.06-69.05 152.43-153.94 152.43z"
          filter="url(#second_hexagon_earth)"
        />
      </g>

      {/* World Events Lines */}
      <SvgGaussianBlur
        id="second_hexagon_WELS"
        blurRadius={WELS.blurRadius}
        floodColor="#B3FF03"
        floodOpacity={1}
      />

      <g
        stroke={WELS.strokeColor}
        strokeOpacity={WELS.strokeOpacity}
        strokeWidth={WELS.strokeWidth}
        fill="none"
        vectorEffect="non-scaling-stroke"
        filter="url(#second_hexagon_WELS)"
      >
        <path d="M430.42 282.45h-98.79" />
        <path d="M421.18 245.76l-242.26-.04" />
        <path d="M434.53 401.39H236.75" />
        <path d="M445.48 341.92H424" />
        <path d="M440.74 372.12l-187.28-1.15" />
        <path d="M438.65 309.27H242.17" />
      </g>

      {/* rectangle */}
      <SvgGaussianBlur
        id="second_hexagon_rectangle"
        blurRadius={rectangleStyle.blurRadius}
        floodColor="#B3FF03"
        floodOpacity={1}
      />

      <g
        stroke={rectangleStyle.strokeColor}
        strokeOpacity={rectangleStyle.strokeOpacity}
        strokeWidth={rectangleStyle.strokeWidth}
        fill="none"
        strokeLinecap="square"
        filter="url(#second_hexagon_rectangle)"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M503.25 320.87H600l-38.57 52.78h-96.07l37.89-52.78z" />
        <path d="M485.24 342.34H450.9" />
        <path d="M434.98 400.3l12.3-57.96-25.3-95.73" />
      </g>
    </svg>
  );
};

/******************************* PropTypes **************************************
 ***************** check default props for incoming data structures **************/

SecondHexagon.propTypes = {
  width: pt.oneOfType([pt.number, pt.string]).isRequired,
  height: pt.oneOfType([pt.number, pt.string]).isRequired,
  style: pt.object,
  //optional styles and options for this hexagon
  beehiveStyles: pt.arrayOf(pt.object),
  earthStyle: pt.object,
  worldEventsLineStyle: pt.object,
  rectangleStyle: pt.object,
  networkLinesStyle: pt.object
};

SecondHexagon.defaultProps = {
  mainHexagon: {
    strokeColor: "#5c6298",
    strokeWidth: 15,
    strokeOpacity: 1,
    blurRadius: 4
  },
  beehiveStyles: [
    // first beehive
    {
      blurRadius: 4,
      strokeColor: "#70CBF2",
      strokeWidth: 6,
      strokeOpacity: 0.3
    },
    // second beehive
    {
      blurRadius: 4,
      strokeColor: "#70CBF2",
      strokeWidth: 3,
      strokeOpacity: 0.6
    },
    // third beehive
    {
      blurRadius: 4,
      strokeColor: "#70CBF2",
      strokeWidth: 2,
      strokeOpacity: 0.8
    }
  ],
  earthStyle: {
    blurRadius: 10,
    fillColor: "#140659",
    fillOpacity: 0.7,
    strokeColor: "#3665C1",
    strokeWidth: 0.7,
    strokeOpacity: 1.0
  },
  worldEventsLineStyle: {
    blurRadius: 3,
    strokeColor: "#DDA602",
    strokeWidth: 3,
    strokeOpacity: 0.7
  },
  rectangleStyle: {
    blurRadius: 10,
    strokeColor: "#DDA602",
    strokeWidth: 4,
    strokeOpacity: 0.8
  }
};

export default SecondHexagon;
