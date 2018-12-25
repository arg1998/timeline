import React from "react";
import FirstHexagonContent from "../AbstractHexagonContents/FirstHexagonContent/FirstHexagonContent";
import SecondHexagonContent from "../AbstractHexagonContents/SecondHexagonContent/SecondHexagonContent";
import ThirdHexagonContent from "../AbstractHexagonContents/ThirdHexagonContent/ThirdHexagonContent";
import FourthHexagonContent from "../AbstractHexagonContents/FourthHexagonContent/FourthHexagonContent";
import EmptyContent from "../AbstractHexagonContents/EmptyContent/EmptyContent";

const SvgLinearGradient = props => {
  const { id, beginColor, stopColor } = props;

  return (
    <linearGradient
      id={id}
      x2={1}
      y1={0.5}
      y2={0.5}
      gradientTransform="matrix(0 767.605 575.703 0 162.15 66.2)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0%" stopColor={beginColor || "#cb79dd"} />
      <stop offset="50%" stopColor="#cb00dd" />
      <stop offset="100%" stopColor={stopColor || "#259"} />
    </linearGradient>
  );
};

const AbstractHexagon = props => {
  const { width, height, style, activeIndex } = props;
  let Content = null;
  switch (activeIndex) {
    case -1:
      Content = <EmptyContent />;
      break;
    case 0:
      Content = <FirstHexagonContent active />;
      break;
    case 1:
      Content = <SecondHexagonContent active />;
      break;
    case 2:
      Content = <ThirdHexagonContent active />;
      break;
    case 3:
      Content = <FourthHexagonContent active />;
      break;
    default:
      Content = null;
      break;
  }

  return (
    <svg
      viewBox="0 0 900 900"
      preserveAspectRatio="none"
      width={width}
      height={height}
      style={style}
    >
      {/* content */}
      {Content}

      {/* hexagon ring 0 */}
      <clipPath id="hex_ring_path_0">
        <path
          fill="#FFF"
          d="M165.72 260.48v379.04L450 829.04l284.28-189.52V260.48L450 70.96 165.72 260.48zm-3.57 381.42V258.1L450 66.2l287.85 191.9v383.8L450 833.8 162.15 641.9z"
        />
      </clipPath>
      <g clipPath="url(#hex_ring_path_0)">
        <SvgLinearGradient id="hex_ring_color_0" />
        <path
          fill="url(#hex_ring_color_0)"
          d="M165.72 260.48v379.04L450 829.04l284.28-189.52V260.48L450 70.96 165.72 260.48zm-3.57 381.42V258.1L450 66.2l287.85 191.9v383.8L450 833.8 162.15 641.9z"
        />
      </g>

      {/* hexagon ring 1 */}
      <clipPath id="hex_ring_path_1">
        <path
          fill="#FFF"
          d="M166.13 237.13l-17.72 390.3L432.3 840.3l301.58-177.43 17.71-390.3L467.71 59.7 166.13 237.14zM144.74 629.6l17.93-395.06 305.26-179.6L755.26 270.4l-17.93 395.06-305.26 179.6L144.74 629.6z"
        />
      </clipPath>
      <g clipPath="url(#hex_ring_path_1)">
        <SvgLinearGradient id="hex_ring_color_1" />
        <path
          fill="url(#hex_ring_color_1)"
          d="M166.13 237.13l-17.72 390.3L432.3 840.3l301.58-177.43 17.71-390.3L467.71 59.7 166.13 237.14zM144.74 629.6l17.93-395.06 305.26-179.6L755.26 270.4l-17.93 395.06-305.26 179.6L144.74 629.6z"
        />
      </g>

      {/* hexagon ring 2 */}
      <clipPath id="hex_ring_path_2">
        <path
          fill="#FFF"
          d="M167.65 213.12l-36.49 400.8 282.36 236.87 318.83-163.91 36.48-400.8L486.48 49.21 167.65 213.12zM127.4 615.85l36.91-405.53 322.6-165.85L772.6 284.15l-36.91 405.52-322.6 165.86-285.7-239.68z"
        />
      </clipPath>
      <g clipPath="url(#hex_ring_path_2)">
        <SvgLinearGradient id="hex_ring_color_2" />
        <path
          fill="url(#hex_ring_color_2)"
          d="M167.65 213.12l-36.49 400.8 282.36 236.87 318.83-163.91 36.48-400.8L486.48 49.21 167.65 213.12zM127.4 615.85l36.91-405.53 322.6-165.85L772.6 284.15l-36.91 405.52-322.6 165.86-285.7-239.68z"
        />
      </g>

      {/* hexagon ring 3 */}
      <clipPath id="hex_ring_path_3">
        <path
          fill="#FFF"
          d="M170.33 188.5l-56.3 410.41L393.7 860.42l335.97-148.91 56.3-410.42L506.28 39.58 170.34 188.5zM110.2 600.62l56.94-415.12 339.8-150.62 282.87 264.5-56.94 415.12-339.81 150.62-282.87-264.5z"
        />
      </clipPath>
      <g clipPath="url(#hex_ring_path_3)">
        <SvgLinearGradient id="hex_ring_color_3" />
        <path
          fill="url(#hex_ring_color_3)"
          d="M170.33 188.5l-56.3 410.41L393.7 860.42l335.97-148.91 56.3-410.42L506.28 39.58 170.34 188.5zM110.2 600.62l56.94-415.12 339.8-150.62 282.87 264.5-56.94 415.12-339.81 150.62-282.87-264.5z"
        />
      </g>

      {/* hexagon ring 4 */}
      <clipPath id="hex_ring_path_4">
        <path
          fill="#FFF"
          d="M174.25 163.3L97.1 582.4l275.75 286.7 352.9-132.4 77.15-419.1L527.15 30.9l-352.9 132.4zM93.18 583.87l78-423.75L528 26.24l278.82 289.89-78 423.75-356.83 133.88-278.8-289.89z"
        />
      </clipPath>
      <g clipPath="url(#hex_ring_path_4)">
        <SvgLinearGradient id="hex_ring_color_4" />
        <path
          fill="url(#hex_ring_color_4)"
          d="M174.25 163.3L97.1 582.4l275.75 286.7 352.9-132.4 77.15-419.1L527.15 30.9l-352.9 132.4zM93.18 583.87l78-423.75L528 26.24l278.82 289.89-78 423.75-356.83 133.88-278.8-289.89z"
        />
      </g>

      {/* hexagon ring 5 */}
      <clipPath id="hex_ring_path_5">
        <path
          fill="#FFF"
          d="M179.46 137.6L80.44 564.35l270.53 312.4L720.54 762.4l99.02-426.73-270.54-312.4-369.56 114.35zm-103 427.98l100.09-431.34L550.09 18.67l273.45 315.75-100.09 431.34-373.54 115.57L76.46 565.58z"
        />
      </clipPath>
      <g clipPath="url(#hex_ring_path_5)">
        <SvgLinearGradient id="hex_ring_color_5" />
        <path
          fill="url(#hex_ring_color_5)"
          d="M179.46 137.6L80.44 564.35l270.53 312.4L720.54 762.4l99.02-426.73-270.54-312.4-369.56 114.35zm-103 427.98l100.09-431.34L550.09 18.67l273.45 315.75-100.09 431.34-373.54 115.57L76.46 565.58z"
        />
      </g>

      {/* hexagon ring 6 */}
      <clipPath id="hex_ring_path_6">
        <path
          fill="#FFF"
          d="M186.03 111.48L64.13 544.7l263.96 338.52 385.88-94.7 121.9-433.24L571.9 16.77l-385.87 94.7zM60.09 545.7l123.18-437.76 389.91-95.7L839.91 354.3 716.73 792.06l-389.91 95.7L60.09 545.7z"
        />
      </clipPath>
      <g clipPath="url(#hex_ring_path_6)">
        <SvgLinearGradient id="hex_ring_color_6" />
        <path
          fill="url(#hex_ring_color_6)"
          d="M186.03 111.48L64.13 544.7l263.96 338.52 385.88-94.7 121.9-433.24L571.9 16.77l-385.87 94.7zM60.09 545.7l123.18-437.76 389.91-95.7L839.91 354.3 716.73 792.06l-389.91 95.7L60.09 545.7z"
        />
      </g>

      {/* hexagon ring 7 */}
      <clipPath id="hex_ring_path_7">
        <path
          fill="#FFF"
          d="M194.02 84.98L48.25 523.48l255.98 365.01 401.75-73.48 145.77-438.49L595.77 11.51 194.02 84.98zM44.18 524.22l.36-1.11L191.42 81.29 597.25 7.06l258.57 368.72-.37 1.11-146.87 441.82-405.83 74.22L44.18 524.22z"
        />
      </clipPath>
      <g clipPath="url(#hex_ring_path_7)">
        <SvgLinearGradient id="hex_ring_color_7" />
        <path
          fill="url(#hex_ring_color_7)"
          d="M194.02 84.98L48.25 523.48l255.98 365.01 401.75-73.48 145.77-438.49L595.77 11.51 194.02 84.98zM44.18 524.22l.36-1.11L191.42 81.29 597.25 7.06l258.57 368.72-.37 1.11-146.87 441.82-405.83 74.22L44.18 524.22"
        />
      </g>

      {/* hexagon ring 8 */}
      <clipPath id="hex_ring_path_8">
        <path
          fill="#FFF"
          d="M203.48 58.2L32.89 500.62l246.52 391.8 417.11-50.62 170.59-442.42L620.59 7.58 203.48 58.2zM28.79 501.12L201.06 54.35l421.2-51.12 248.95 395.65-172.27 446.77-421.2 51.12L28.79 501.12z"
        />
      </clipPath>
      <g clipPath="url(#hex_ring_path_8)">
        <SvgLinearGradient id="hex_ring_color_8" />
        <path
          fill="url(#hex_ring_color_8)"
          d="M203.48 58.2L32.89 500.62l246.52 391.8 417.11-50.62 170.59-442.42L620.59 7.58 203.48 58.2zM28.79 501.12L201.06 54.35l421.2-51.12 248.95 395.65-172.27 446.77-421.2 51.12L28.79 501.12z"
        />
      </g>

      {/* hexagon ring 9 */}
      <clipPath id="hex_ring_path_9">
        <path
          fill="#FFF"
          d="M214.48 31.22L18.15 476.13l235.53 418.78 431.84-26.13 196.33-444.91L646.32 5.08 214.48 31.22zM14.04 476.38l198.2-449.15 1.02-.07L648.19.84l237.77 422.78-198.2 449.15-1.02.07-434.94 26.31L14.05 476.38z"
        />
      </clipPath>
      <g clipPath="url(#hex_ring_path_9)">
        <SvgLinearGradient id="hex_ring_color_9" />
        <path
          fill="url(#hex_ring_color_9)"
          d="M214.48 31.22L18.15 476.13l235.53 418.78 431.84-26.13 196.33-444.91L646.32 5.08 214.48 31.22zM14.04 476.38l198.2-449.15 1.02-.07L648.19.84l237.77 422.78-198.2 449.15-1.02.07-434.94 26.31L14.05 476.38z"
        />
      </g>

      {/* hexagon ring 10 */}
      <clipPath id="hex_ring_path_10">
        <path
          fill="#FFF"
          d="M227.06 4.12L4.12 450l222.94 445.88h445.88L895.88 450 672.94 4.12H227.06zM0 450L225 0h450l225 450-225 450H225L0 450z"
        />
      </clipPath>
      <g clipPath="url(#hex_ring_path_10)">
        <SvgLinearGradient id="hex_ring_color_10" />
        <path
          fill="url(#hex_ring_color_10)"
          d="M227.06 4.12L4.12 450l222.94 445.88h445.88L895.88 450 672.94 4.12H227.06zM0 450L225 0h450l225 450-225 450H225L0 450z"
        />
      </g>
    </svg>
  );
};

export default AbstractHexagon;
