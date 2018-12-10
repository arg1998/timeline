import React from "react";
import pt from "prop-types";

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
  const bh0 = beehiveStyles[0];
  const bh1 = beehiveStyles[1];
  const bh2 = beehiveStyles[2];

  return (
    <svg viewBox="90 -80 605 720" style={style} width={width} height={height}>
      {/* main center hexagon */}
      <defs>
        <filter
          id="second_hexagon_main_center"
          width="400%"
          height="400%"
          x="-200%"
          y="-200%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur xmlns="http://www.w3.org/2000/svg" stdDeviation={4} />
        </filter>
      </defs>
      <path
        strokeWidth={mainHexagon.strokeWidth}
        stroke={mainHexagon.strokeColor}
        strokeOpacity={mainHexagon.strokeOpacity}
        fill="none"
        strokeLinejoin="round"
        d="M617 379.87L527.47 538.3H277.46L152.48 315.79 277.46 93.3h250.01L650 313.86"
        filter="url(#second_hexagon_main_center)"
        vectorEffect="non-scaling-stroke"
      />

      {/* beehive 0 */}
      <g
        // custom style from props
        stroke={bh0.strokeColor}
        strokeWidth={bh0.strokeWidth}
        strokeOpacity={bh0.strokeOpacity}
        fill="none"
        strokeLinejoin="round"
        filter="url(#second_hexagon_beehive_0)"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M529.48 2l23.5 42.65-23.5 42.65h-47.01l-23.49-42.65L482.47 2h47.01zm-70.51-42.65L482.47 2l-23.5 42.65h-47L388.47 2l23.5-42.65h47zM523.5 100l23.5 42.65-23.5 42.65h-47L453 142.65 476.5 100h47z" />
      </g>
      <defs>
        <filter
          id="second_hexagon_beehive_0"
          width="400%"
          height="400%"
          x="-200%"
          y="-200%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur
            xmlns="http://www.w3.org/2000/svg"
            stdDeviation={bh0.blurRadius}
          />
        </filter>
      </defs>

      {/* beehive 1 */}
      <g
        stroke={bh1.strokeColor}
        strokeWidth={bh1.strokeWidth}
        strokeOpacity={bh1.strokeOpacity}
        fill="none"
        strokeLinejoin="round"
        filter="url(#second_hexagon_beehive_1)"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M523.5 446l23.5 42.65-23.5 42.65h-47L453 488.65 476.5 446h47z" />
        <path d="M532.98 544.7l23.5 42.65-23.5 42.65h-47.01l-23.49-42.65 23.49-42.65h47.01z" />
        <path d="M602.5 502l23.5 42.65-23.5 42.65h-47L532 544.65 555.5 502h47z" />
      </g>
      <defs>
        <filter
          id="second_hexagon_beehive_1"
          width="400%"
          height="400%"
          x="-200%"
          y="-200%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur
            xmlns="http://www.w3.org/2000/svg"
            stdDeviation={bh1.blurRadius}
          />
        </filter>
      </defs>

      {/* beehive 2 */}
      <g
        stroke={bh2.strokeColor}
        strokeWidth={bh2.strokeWidth}
        strokeOpacity={bh2.strokeOpacity}
        fill="none"
        strokeLinejoin="round"
        filter="url(#second_hexagon_beehive_2)"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M232.5 271.21l23.5 42.65-23.5 42.65h-47L162 313.86l23.5-42.65h47zm-86-45.51l23.5 42.65L146.5 311h-47L76 268.35l23.5-42.65h47z" />
        <path d="M76 268.35L99.5 311 76 353.65H28.99L5.5 311l23.49-42.65H76z" />
      </g>
      <defs>
        <filter
          id="second_hexagon_beehive_2"
          width="400%"
          height="400%"
          x="-200%"
          y="-200%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur
            xmlns="http://www.w3.org/2000/svg"
            stdDeviation={bh2.blurRadius}
          />
        </filter>
      </defs>

      {/* earth */}
      <defs>
        <filter
          id="second_hexagon_earth"
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
            stdDeviation={earthStyle.blurRadius}
          />
          <feOffset
            xmlns="http://www.w3.org/2000/svg"
            result="pf_100_offsetBlur"
          />
          <feFlood
            xmlns="http://www.w3.org/2000/svg"
            floodColor="#4FFFE7"
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
        </filter>
      </defs>
      <path
        fill={earthStyle.fillColor}
        stroke={earthStyle.strokeColor}
        strokeWidth={earthStyle.strokeWidth}
        opacity={earthStyle.fillOpacity}
        strokeOpacity={earthStyle.strokeOpacity}
        d="M456.2 285.43a255.76 255.76 0 0 0-3.55-20.98 231.92 231.92 0 0 0-40.88-89.61 231.85 231.85 0 0 0-11.67-14.31 234.72 234.72 0 0 0-43.8-38.89 236.35 236.35 0 0 0-24.29-14.51c-.84-1.49-12.7-6.22-16.81-7.96a231.51 231.51 0 0 0-83.72-18.01c-2.16-.06-4.31-.16-6.48-.16-4.6 0-9.18.17-13.72.44a231.44 231.44 0 0 0-99.05 28.77A234.44 234.44 0 0 0 10.39 223.29 231.86 231.86 0 0 0-8 314.01c0 128.48 104.53 233.01 233.01 233.01C353.5 547.02 458 442.48 458 314c0-9.67-.65-19.2-1.8-28.57zm-12.78-9.55c-2.94-.71-5.99-2.77-9.36-7.26-9.13-12.18-35.58-52.67-26.21-47.75 9.36 4.91 31.6 32.3 31.6 47.04 0 0 .81.27 2.5.14a203.8 203.8 0 0 1 1.47 7.83zM225 535.78C102.72 535.78 3.22 436.29 3.22 314c0-26.9 4.83-52.7 13.65-76.58.56 1.51 1.09 3.08 1.62 4.74 4.21 13.34 26.33 17.56 33.7 16.15 7.37-1.4 4.92 4.56 11.94 6.68 7.02 2.11 12.64 9.12 21.07 17.9 8.42 8.79 17.43 4.69 17.43 4.69s-.93 9.36-3.28 12.17c-2.34 2.81-14.97-5.61-3.74 32.3 11.24 37.92 28.09 32.3 31.83 35.11 3.75 2.81.47 37.45-.93 53.83-1.41 16.38-.94 26.21 4.2 62.73 5.15 36.51 27.62 24.34 30.9 19.19 3.27-5.14-11.23-4.21-12.17-9.36-.94-5.15-2.81-13.11 2.34-18.26 5.15-5.15-2.34-5.15-4.68-7.49-2.34-2.33 5.61-19.19 9.37-24.81 3.74-5.62 11.23-5.15 13.43-7.96 2.2-2.81 8.09-10.3 15.59-15.98 7.48-5.68 8.42-21 9.83-26.62 1.4-5.62 14.97-9.83 20.59-13.1 5.62-3.28 3.75-20.6 4.21-26.22.48-5.62 10.78-14.05 12.64-22.01 1.88-7.96-10.76-12.16-18.25-14.97-7.49-2.81-13.1-5.62-26.22-7.02-13.11-1.41-6.55-17.33-18.72-18.73-12.17-1.41-6.08-.93-12.17-6.55s-7.5-7.96-16.85-8.33c-9.38-.36-13.58-1.5-18.73-3.38s-14.98 7.02-14.98 7.02-3.13 2.96-4.01 3.22c-.87.27-3.68-1.23-5.09-2.63-1.4-1.41-3.77 2.81-5.79 2.1-2.01-.7-4.12-5.79-6.58-7.37s1.06-7.02-1.23-13.34-10.18-1.05-14.75-2.28c-4.56-1.22 2.99-10.89 5.09-14.57 2.11-3.69-2.63-3.69-6.67-3.34-4.04.35-6.15 8.96-12.47 8.25-6.32-.7-8.25-3.15-7.89-8.25.35-5.09-5.09-6.32-.35-18.96s19.83-7.19 23.34-8.95c3.51-1.76 9.13-1.41 16.51.7 7.37 2.11 5.96 9.83 6.32 12.64.35 2.81 2.81-9.83 2.1-17.55-.7-7.73 11.59-8.78 17.21-13.7 5.61-4.92 9.12-15.8 11.93-20.36 2.81-4.57 9.48-5.27 11.24-10.54 1.75-5.26 10.09-6.93 11.23-7.81 1.14-.88 2.9.44 1.76 3.16-1.15 2.71 2.46 2.19 5.26 0 2.81-2.2 13.1-8.22 11.12-9.86-1.99-1.64-2.92 1.64-5.03 1.17-2.11-.47-3.87-2.34-4.8-4.56-.94-2.22 1.41-3.05-.58-5.62-2-2.57-4.1-3.63-1.53-5.5 2.58-1.87 14.28.94 19.19-.23 4.92-1.18 5.62-2.11 5.39.23-.23 2.35-4.09 7.96-5.5 9.72-1.4 1.75 12.99 3.51 16.51 3.51 3.51 0-1.06-8.08-5.62-10.54-4.56-2.45.35-10.53-1.06-15.7-1.4-5.18-10.88-11.57-11.82-14.61-.47-1.54-1.01-4.8-1.68-8.05a221.43 221.43 0 0 1 48.55-7.1c2.28 3.04 4.56 4.42 6.49 2.27a20.2 20.2 0 0 0 1.86-2.46c41.79.09 80.9 11.8 114.27 32.05l-3.71.6s-4.38-4.45-6.73-2.81c-2.34 1.64-5.27 2.45-8.43 4.68-3.16 2.22-9.94 8.08-11.35 11-1.4 2.93-4.91 5.74-10.53 7.14-5.62 1.41-10.53 1.64-8.08 3.28 2.46 1.64 8.31 4.1 8.31 8.9 0 4.79 1.64 8.77-.93 9.48-2.58.7-14.99-1.63-17.33 3.28a40.58 40.58 0 0 0-3.74 14.27c-.24 3.99-.7 7.73 7.02 7.5 7.73-.24 12.87-1.67 15.45-3.29 2.57-1.63 1.87-4.9 6.32-9.35 4.45-4.45 5.85-2.57 6.08-6.32.24-3.75-.7-7.72 2.11-7.02 2.81.7 5.38-2.58 8.42-1.18 3.05 1.41 4.92-3.51 9.6 1.64 4.69 5.15 10.07 8.44 11.47 11.47 1.4 3.04 6.32 4.92 4.68 8.9-1.63 3.97 4.92-7.14 4.57-10.3-.36-3.16-6.68-7.72-7.5-9.01-.81-1.29-5.03-8.31-.23-6.67 4.8 1.64 11.82 8.3 12.17 10.88.35 2.58 3.63 11.24 6.44 14.75 2.81 3.51 6.67 4.8 7.02 4.68.35-.12-1.99-8.43-.23-12.06 1.76-3.63 5.73-5.15 7.37-4.21 1.63.94 1.86 2.57 3.74 1.4 1.88-1.16 4.33-2.34 3.98-5.85-.26-2.54.23-5.5.88-7.71a227.4 227.4 0 0 1 9.11 10.25c-6.44 1.11-15.97 3.11-15.6 7.64.46 5.85 5.84 14.75 14.97 12.17 9.13-2.57 12.06-1.99 13.11 0 1.06 1.99 2.11 14.98-8.31 16.51 0 0-31.83-5.15-35.11-6.09-6.08-.93-2.81 7.03-2.81 8.9s-26.21-4.83-26.21-8.98c0-4.14 9.83-15.36-17.33-11.15-27.14 4.21-34.63 9.54-41.65 20.45-7.03 10.92-23.88 14.66-22.95 34.79.95 20.12-3.74 22 7.97 32.76 11.69 10.77 11.69 20.13 44.94 10.77 33.23-9.36 13.1-.75 16.38 3.84 3.28 4.59 9.36.37 10.3 4.58.94 4.22-6.56 12.64.94 21.07 7.49 8.42 11.7 29.49 7.49 35.11-4.21 5.62 5.14 17.79 3.74 29.96-1.4 12.18 9.13 13.58 11 22.71 1.87 9.13 6.79 17.32 29.73 5.62 22.94-11.71 11.23-22.71 17.55-25.52 6.32-2.81 2.58-15.68 10.54-20.59 7.95-4.92 18.25-7.5 12.16-30.91-6.08-23.4 6.09-23.4 15.92-33.46a87.1 87.1 0 0 0 3.7-4.06c.35 5.05.58 10.13.58 15.27.01 122.3-99.47 221.79-221.76 221.79z"
        filter="url(#second_hexagon_earth)"
        vectorEffect="non-scaling-stroke"
      />

      {/* world event vertical lines*/}
      <defs>
        <filter
          id="second_hexagon_vertical_world_event_lines"
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
            stdDeviation={WELS.blurRadius}
          />
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
        </filter>
      </defs>
      <g
        stroke={WELS.strokeColor}
        strokeWidth={WELS.strokeWidth}
        strokeOpacity={WELS.strokeOpacity}
        strokeLinecap="square"
        filter="url(#second_hexagon_vertical_world_event_lines)"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M481 149.5H308.5" />
        <path d="M499 212.5h-76" />
        <path d="M511 258.5H66" />
        <path d="M525 314.51H373" />
        <path d="M502.56 416.5H162" />
        <path d="M515.29 366.3H211" />
      </g>

      {/* network lines */}
      <defs>
        <filter
          id="second_hexagon_network_lines"
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
            stdDeviation={rectangleStyle.blurRadius}
          />
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
        </filter>
      </defs>
      <g
        stroke={rectangleStyle.strokeColor}
        strokeWidth={rectangleStyle.strokeWidth}
        strokeOpacity={rectangleStyle.strokeOpacity}
        fill="none"
        strokeLinecap="square"
        filter="url(#second_hexagon_network_lines)"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M502.59 415.2L527.63 315 483 149.5" />
        <path d="M635.25 314.06l-106.25.45" />
        <path d="M637.08 313.86h154.17l-61.45 66.01H576.7l60.38-66.01z" />
      </g>
    </svg>
  );
};

/******************************* PropTypes **************************************
 ***************** check default props for incoming data structures **************/

SecondHexagon.propTypes = {
  width: pt.number.isRequired,
  height: pt.number.isRequired,
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
    strokeWidth: 5,
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
    strokeWidth: 8,
    strokeOpacity: 0.8
  }
};

export default SecondHexagon;
