import React from "react";
import pt from "prop-types";
import SvgGaussianBlur from '../../SvgGaussianBlur/SvgGaussianBlur'

const FourthHexagon = props => {
  // extracting needed variables from props
  const {
    width,
    height,
    style,
    mainHexagon,
    beehiveStyles,
    linkedLinesStyles: LLS,
    circlesStyle,
    humanStyles
  } = props;

  // getting beehives styles from props
  if (!beehiveStyles && beehiveStyles.length !== 2) {
    console.error("beehive styles for FirstHexagon is missing");
  }
  const [bh0, bh1] = beehiveStyles;

  return (
    <svg
      viewBox="825.23 135.5 607.77 726.21"
      width={width}
      height={height}
      style={style}
    >
      {/* main center hexagon */}
      <SvgGaussianBlur id="fourth_hexagon_main_center" blurRadius={mainHexagon.blurRadius} />
      <path
        stroke={mainHexagon.strokeColor}
        strokeWidth={mainHexagon.strokeWidth}
        strokeOpacity={mainHexagon.strokeOpacity}
        d="M1308 651l-61.67 110.67H996.32l-124.99-222.5 124.99-222.5h250.01l125 222.5L1354 570"
        fill="none"
        strokeLinejoin="round"
        filter="url(#fourth_hexagon_main_center)"
      />

      {/* network lines */}
      <SvgGaussianBlur id="fourth_hexagon_lines" blurRadius={LLS.blurRadius} floodColor="B3FF03" floodOpacity={1} />
      <g
        stroke={LLS.strokeColor}
        strokeWidth={LLS.strokeWidth}
        strokeOpacity={LLS.strokeOpacity}
        strokeDasharray={`${LLS.dashSize} ${LLS.dashGapSize}`}
        strokeDashoffset={LLS.dashOffset}
        vectorEffect="non-scaling-stroke"
        strokeLinecap="square"
        filter="url(#fourth_hexagon_lines)"
      >
        <path d="M1209.75 384.75l-91.5 146" />
        <path d="M1118 531.25L993 564" />
        <path d="M1210 384l-107.87 29" />
        <path d="M1297 612l-178.75-81" />
        <path d="M1357 395l-145.37-10.25" />
        <path d="M1167.75 276l42.38 108.75" />
        <path d="M1118.25 530.63l13.88 76.87" />
      </g>

      {/* node circles */}
      <g
        fill={circlesStyle.fillColor}
        fillOpacity={circlesStyle.fillOpacity}
        vectorEffect="non-scaling-stroke"
      >
        <circle cx={1118.3} cy={530.3} r={circlesStyle.radius} />
        <circle cx={1210.14} cy={383.67} r={circlesStyle.radius} />
      </g>

      {/* humans */}
      <g
        stroke={humanStyles.strokeColor}
        strokeWidth={humanStyles.strokeWidth}
        strokeOpacity={humanStyles.strokeOpacity}
        fill="none"
        strokeLinecap="square"
        vectorEffect="non-scaling-stroke"
      >
        {/* bodies */}
        <path d="M1180.88 171.12h6.77l13.19 46.67-12.97 56.21h-40.63L1133 217.79l12.52-46.67h7.28m-72.17 195.33h6.77l13.18 46.67-12.96 56.21H1047l-14.24-56.2 12.52-46.68h7.28m294.16 199.67h6.77l13.18 46.67-12.96 56.21h-40.63l-14.24-56.21 12.51-46.67h7.29m-347.76-48h6.77l13.19 46.67L977.87 621h-40.63L923 564.79l12.52-46.67h7.28m464.25-170.34h6.77l13.18 46.68-12.96 56.2h-40.63l-14.25-56.2 12.52-46.68h7.28m-231.99 292.34h6.76l13.19 46.67-12.97 56.21h-40.63l-14.24-56.21 12.52-46.67h7.28" />
        {/* heads */}
        <path d="M1175.87 179.15h-18.31l-9.21-19.65 9.11-19.5h18.32l9.2 19.5-9.1 19.65zm-100.25 195.33h-18.32l-9.2-19.64 9.1-19.5h18.33l9.2 19.5-9.1 19.64zm266.09 199.67h-18.32l-9.2-19.64 9.1-19.51h18.33l9.2 19.5-9.1 19.65zm-375.84-48h-18.31l-9.21-19.64 9.11-19.51h18.32l9.2 19.5-9.1 19.65zm436.17-170.34h-18.32l-9.2-19.64 9.1-19.5h18.32l9.2 19.5-9.1 19.64zm-260.08 292.34h-18.32l-9.2-19.64 9.1-19.51h18.32l9.2 19.5-9.1 19.65z" />
      </g>

      {/* beehive 0 */}
      <SvgGaussianBlur id="fourth_hexagon_beehive" blurRadius={bh0.blurRadius} />
      <g
        stroke={bh0.strokeColor}
        strokeWidth={bh0.strokeWidth}
        strokeOpacity={bh0.stopOpacity}
        filter="url(#fourth_hexagon_beehive)"
        fill="none"
        strokeLinecap="square"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M967.6 352.27h-47.03l-23.64-42.78 23.4-42.49h47.03L991 309.49l-23.4 42.78zm-51 89.73h-47.03l-23.64-42.78 23.4-42.5h47.03l23.64 42.5L916.6 442zm86.08 45.07h-47.04L932 444.3l23.4-42.49h47.03l23.64 42.49-23.4 42.78z" />
      </g>

      {/* beehive 1 */}
      <g
        stroke={bh1.strokeColor}
        strokeWidth={bh1.strokeWidth}
        strokeOpacity={bh1.stopOpacity}
        fill="none"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="square"
        filter="url(#fourth_hexagon_beehive)"
      >
        <path d="M1242.68 754.27h-47.04L1172 711.5l23.4-42.49h47.03l23.64 42.49-23.4 42.78z" />
        <path d="M1321.6 809.27h-47.03l-23.64-42.78 23.4-42.49h47.03l23.64 42.49-23.4 42.78z" />
        <path d="M1249.01 851.9h-47.04l-23.64-42.78 23.4-42.49h47.03l23.64 42.5-23.39 42.78z" />
        <path d="M1392.28 851.9h-47.03l-23.64-42.78 23.39-42.49h47.04l23.64 42.5-23.4 42.78z" />
      </g>
    </svg>
  );
};

/******************************* PropTypes **************************************
 ***************** check default props for incoming data structures **************/
FourthHexagon.propTypes = {
  width: pt.oneOfType([pt.number, pt.string]).isRequired,
  height: pt.oneOfType([pt.number, pt.string]).isRequired,
  style: pt.object,
  //optional styles and options for this hexagon
  mainHexagon: pt.object,
  beehiveStyles: pt.arrayOf(pt.object),
  linkedLinesStyles: pt.object,
  circlesStyle: pt.object,
  humanStyles: pt.object
};

FourthHexagon.defaultProps = {
  mainHexagon: {
    strokeColor: "#5C6298",
    strokeWidth: 15,
    strokeOpacity: 0.8,
    blurRadius: 4.5
  },
  beehiveStyles: [
    // first beehive
    {
      blurRadius: 4,
      strokeColor: "#70CBF2",
      strokeWidth: 3,
      strokeOpacity: 0.7
    },
    // second beehive
    {
      strokeColor: "#70CBF2",
      strokeWidth: 3,
      strokeOpacity: 0.6
    }
  ],
  linkedLinesStyles: {
    blurRadius: 10,
    strokeColor: "#DDA602",
    strokeWidth: 5.5,
    strokeOpacity: 0.6,
    dashSize: 12,
    dashGapSize: 15,
    dashOffset: 0
  },
  circlesStyle: {
    radius: 13,
    fillColor: "#DDA602",
    fillOpacity: 1
  },
  humanStyles: {
    strokeColor: "#70CBF2",
    strokeWidth: 5,
    strokeOpacity: 0.6
  }
};
export default FourthHexagon;
