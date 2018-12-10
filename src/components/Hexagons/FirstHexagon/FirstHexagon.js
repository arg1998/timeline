import React from "react";
import pt from "prop-types";

const FirstHexagon = props => {
  // extracting needed variables from props
  const {
    width,
    height,
    style,
    mainHexagon,
    beehiveStyles,
    linkedLinesStyles: LLS,
    miniHexagonsStyles
  } = props;

  // getting beehives styles from props
  if (!beehiveStyles && beehiveStyles.length !== 3) {
    console.error("beehive styles for FirstHexagon is missing");
  }
  const bh0 = beehiveStyles[0];
  const bh1 = beehiveStyles[1];
  const bh2 = beehiveStyles[2];

  return (
    <svg viewBox="10 -80 720 700" width={width} height={height} style={style}>
      {/* main center hexagon */}
      <defs>
        <filter
          id="first_hexagon_main_center"
          x="-200%"
          y="-200%"
          width="400%"
          height="400%"
          filterUnits="objectBoundingBox"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur xmlns="http://www.w3.org/2000/svg" stdDeviation={mainHexagon.blurRadius} />
        </filter>
      </defs>
      <g filter="url(#first_hexagon_main_center)" vectorEffect="non-scaling-stroke">
        <path
          strokeWidth={mainHexagon.strokeWidth}
          stroke={mainHexagon.strokeColor}
          strokeOpacity={mainHexagon.strokeOpacity}
          d="M533.431 530.824h-250L157.775 307.547 282.12 85.824h249.999l125.656 221.723-124.344 223.277z"
          fill="none"
          strokeLinecap="square"
        />
      </g>

      {/* linked lines */}
      <g
        // LLS : LinkedListStyle
        strokeWidth={LLS.strokeWidth}
        stroke={LLS.strokeColor}
        strokeOpacity={LLS.strokeOpacity}
        strokeLinecap="square"
        vectorEffect="non-scaling-stroke"
      >
        <path
          d="M388.454 33.929v84M413 151l93 41M370.545 148.929L277 192M530 232l88 47M503.454 226.071L448 277M276.025 247.459l.124 36.541M446 325l2 67M253 321l-78 71M593 314.071L532 392M298 321l50 71M636 314.071L700 372"
        />
        <g
          strokeDasharray={`${LLS.dashSize} ${LLS.dashGapSize}`}
          strokeWidth={LLS.dashWidth}
          strokeDashoffset={LLS.dashOffset}
        >
          <path d="M327 431l-50 29M276 463l.149 103" />
          <path d="M345.736 409.07l61.984 50.788M409 464v44" />
          <path d="M175 440v48" />
          <path d="M700 422v106" />
          <path d="M448 440l-2 141" />
          <path d="M525.454 408.071l59.907 50.858M586.211 460v101" />
          <path d="M515 427l-42 33M473 464v80" />
        </g>
      </g>

      {/* mini hexagons inside the main hexagon */}
      <g
        fill={miniHexagonsStyles.fillColor}
        opacity={miniHexagonsStyles.fillOpacity}
        stroke={miniHexagonsStyles.strokeColor}
        strokeWidth={miniHexagonsStyles.strokeWidth}
        strokeOpacity={miniHexagonsStyles.strokeOpacity}
      >
        <path d="M302.19 322.876l-25.91 14.958-26.045-15.037-.045-29.838L276.1 278l25.954 14.88.136 29.996zM472.988 317.171l-25.909 14.959-26.046-15.037-.045-29.84 25.909-14.959 25.956 14.881.135 29.996zM640.988 317.171l-25.909 14.959-26.046-15.038-.045-29.839 25.909-14.959 25.956 14.881.135 29.996zM725.591 412.664l-25.91 14.958-26.045-15.037-.045-29.838 25.908-14.959 25.956 14.88.136 29.996zM473.988 432.876l-25.909 14.958-26.045-15.037-.046-29.838L447.898 388l25.953 14.88.137 29.996zM558 432.876l-25.91 14.958-26.045-15.037-.045-29.838L531.908 388l25.956 14.88.136 29.996zM375.212 432.876l-25.909 14.958-26.045-15.037-.046-29.838L349.122 388l25.954 14.88.136 29.996zM200 432.876l-25.909 14.958-26.045-15.037-.046-29.838L173.91 388l25.954 14.88.136 29.996zM414.683 151.664l-25.91 14.958-26.045-15.037-.045-29.838 25.91-14.959 25.953 14.88.137 29.996zM532 232.677l-25.91 14.958-26.045-15.037L480 202.76l25.91-14.959 25.954 14.88.136 29.996zM302.19 232.677l-25.91 14.958-26.045-15.037-.045-29.838 25.91-14.959 25.954 14.88.136 29.996z" />
      </g>

      {/* beehive 0 */}
      <defs>
        <filter
          id="first_hexagon_beehive_0"
          x="-200%"
          y="-200%"
          width="400%"
          height="400%"
          filterUnits="objectBoundingBox"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            xmlns="http://www.w3.org/2000/svg"
            stdDeviation={bh0.blurRadius}
          />
        </filter>
      </defs>
      <g
        // custom style from props
        stroke={bh0.strokeColor}
        strokeWidth={bh0.strokeWidth}
        strokeOpacity={bh0.strokeOpacity}
        fill="none"
        strokeLinecap="square"
        vectorEffect="non-scaling-stroke"
        filter="url(#first_hexagon_beehive_0)"
      >
        <path d="M156.285 309.271h-47.036l-23.641-42.784L109.003 224h47.036l23.641 42.487-23.395 42.784z" />
        <path d="M234.605 350.906h-47.036l-23.641-42.784 23.395-42.487h47.036L258 308.122l-23.395 42.784z" />
        <path d="M85.608 351.906H38.572l-23.641-42.784 23.394-42.486h47.036l23.642 42.486-23.395 42.784zM85.608 266.636H38.572l-23.641-42.784 23.395-42.487h47.036l23.641 42.487-23.395 42.784z" />
      </g>

      {/* beehive 1 */}
      <g
        //custom prop styles
        strokeOpacity={bh1.strokeOpacity}
        strokeWidth={bh1.strokeWidth}
        stroke={bh1.strokeColor}
        filter="url(#first_hexagon_beehive_1)"
        fill="none"
        strokeLinecap="square"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M604.865 128.406h-47.036l-23.642-42.784 23.395-42.486h47.036l23.641 42.486-23.394 42.784z" />
        <path d="M529.606 176.27H482.57l-23.642-42.784L482.323 91h47.036L553 133.486l-23.394 42.784z" />
        <path d="M675.295 171.148h-47.036l-23.641-42.785 23.394-42.486h47.036l23.642 42.486-23.395 42.785z" />
        <path d="M675.295 85.771h-47.036l-23.641-42.784L628.012.5h47.036l23.642 42.487-23.395 42.784z" />
      </g>
      <defs>
        <filter
          id="first_hexagon_beehive_1"
          x="-200%"
          y="-200%"
          width="400%"
          height="400%"
          filterUnits="objectBoundingBox"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            stdDeviation={bh1.blurRadius}
            xmlns="http://www.w3.org/2000/svg"
            result="_out_8NHcuyQwcQ1CGQawprIyP1GsJCvIKlHc"
          />
        </filter>
      </defs>

      {/* beehive 2 */}
      <g
        // custom style from props
        stroke={bh2.strokeColor}
        strokeOpacity={bh2.strokeOpacity}
        strokeWidth={bh2.strokeWidth}
        filter="url(#first_hexagon_beehive_2)"
        fill="none"
        strokeLinecap="square"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M534.554 618.042h-47.036l-23.641-42.785 23.394-42.486h47.036l23.642 42.486-23.395 42.785zM605.462 575.406h-47.036l-23.642-42.784 23.395-42.486h47.036l23.641 42.486-23.394 42.784z" />
        <path d="M529.605 519.271h-47.036l-23.641-42.784L482.322 434h47.036L553 476.487l-23.395 42.784z" />
      </g>
      <defs>
        <filter
          id="first_hexagon_beehive_2"
          x="-200%"
          y="-200%"
          width="400%"
          height="400%"
          filterUnits="objectBoundingBox"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            xmlns="http://www.w3.org/2000/svg"
            stdDeviation={4}
            result="_out_tlCJlb6WtIkqwJ7w79tsxMFXAkOiDntU"
          />
        </filter>
      </defs>
    </svg>
  );
};

/******************************* PropTypes **************************************
 ***************** check default props for incoming data structures **************/

FirstHexagon.propTypes = {
  width: pt.number.isRequired,
  height: pt.number.isRequired,
  style: pt.object,
  //optional styles and options for this hexagon
  mainHexagon: pt.object,
  beehiveStyles: pt.arrayOf(pt.object),
  linkedLinesStyles: pt.object,
  miniHexagonsStyles: pt.object
};

FirstHexagon.defaultProps = {
  mainHexagon: {
    strokeColor: "#5c6298",
    strokeWidth: 14,
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
  linkedLinesStyles: {
    strokeColor: "#7FC0EE",
    strokeWidth: 6,
    strokeOpacity: 0.5,
    dashSize: 12,
    dashGapSize: 15,
    dashWidth: 6,
    dashOffset: 0
  },
  miniHexagonsStyles: {
    fillOpacity: 1,
    fillColor: "#0078A4",
    strokeColor: null,
    strokeWidth: null,
    strokeOpacity: null
  }
};

export default FirstHexagon;
