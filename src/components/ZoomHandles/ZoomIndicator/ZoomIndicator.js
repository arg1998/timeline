import React from "react";
import pt from "prop-types";

const ZoomIndicator = props => {
  const { level, show, classes } = props;

  return (
    <svg viewBox="0 0 140 170" width="100%" height="100%">
      {/* hexagon */}
      <g>
        <path
          d="M141.206 130.789l-71.924 40-69.282-40V46.346L69.282 0l71.924 46.346v84.443z"
          fill="#65BBE6"
        />
        <path d="M70.603 124.9c-9.585 0-17.917 4.772-21.829 11.801l-.351.649.351.634c3.91 7.035 12.241 11.816 21.829 11.816 9.588 0 17.919-4.781 21.828-11.816l.352-.634-.352-.649c-3.912-7.029-12.243-11.801-21.828-11.801zm-4.231 3.127c-3.834 1.553-6.523 5.149-6.523 9.323s2.689 7.77 6.523 9.323c-6.379-1.1-11.675-4.631-14.573-9.323 2.898-4.694 8.194-8.224 14.573-9.323zm8.462 0c6.379 1.099 11.675 4.629 14.573 9.323-2.898 4.692-8.195 8.223-14.573 9.323 3.834-1.553 6.523-5.149 6.523-9.323s-2.689-7.77-6.523-9.323z" />
        {!show && (
          <path
            transform="rotate(37.06 74.688 125.262) skewX(3.35)"
            vectorEffect="non-scaling-stroke"
            stroke="#FFF"
            strokeLinecap="square"
            d="M69.025 116.18h3.417v41.948h-3.417z"
          />
        )}
        <text
          transform="translate(59.09 98.067)"
          fontFamily="Philosopher"
          fontWeight={400}
          fontSize={36}
        >
          {`${level}`}
        </text>
        <g>
          <text
            transform="translate(40.243 50.8)"
            fontFamily="Philosopher"
            fontWeight={400}
            fontSize={20}
          >
            {"LEVEL"}
          </text>
        </g>
      </g>
    </svg>
  );
};

ZoomIndicator.propTypes = {
  level: pt.number,
  show: pt.bool
};

ZoomIndicator.defaultProps = {
  level: 0,
  show: true
};

export default ZoomIndicator;
