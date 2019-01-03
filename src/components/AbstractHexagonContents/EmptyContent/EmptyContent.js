import React from "react";
import EmptyContentStyles from "./EmptyContent.style";

function EmptyContent(props) {
  const { classes } = props;
  return (
    <>
      <path
        fill="#000"
        fillOpacity={0.6}
        d="M734.36 639.56L450 829.06l-284.38-189.5-.1-379.22L450.1 70.91l284.22 189.5.05 379.15z"
      />

      <svg x={370} y={120} viewBox="0 0 850 900" width={150} height={200}>
        <g>
          <path fillOpacity={0} fill="#191924" d="M0 0h850v900H0z" />
          <g fill="#fff" strokeMiterlimit={10}>
            <path d="M528.664 246.512l62.083-112.309 46.433-14.595 13.252 45.428-62.083 112.309-46.433 14.596-13.252-45.429zM199.703 854.572l62.083-112.309 46.433-14.596 13.252 45.428-62.083 112.309L212.955 900l-13.252-45.428zM272.986 264.825l-60.728-81.69 7.497-45.822.141-.097 47.316 7.742 60.728 81.689-7.498 45.822-.14.098-47.316-7.742zM592.514 885.686l-77.039-103.631 7.018-46.61 47.936 8.432 77.039 103.631-7.018 46.61-47.936-8.432zM685.258 476.686H816.31L850 509.804l-34.895 33.118H684.053l-33.689-33.118 34.894-33.118zM34.895 476.686h131.052l33.689 33.118-34.894 33.118H33.69L0 509.804l34.895-33.118z" />
          </g>
          <g fill="#FFF">
            <path d="M478.06 900h159.981L850 509.804 638.041 119.608H436.014v67.72h164.503l176.464 322.476L600.517 832.28H476.816L478.06 900zM377 900H211.959L0 509.804l211.959-390.196h203.157v67.72H249.483L73.019 509.804 249.483 832.28H377V900z" />
          </g>
          <g
            fill="#0E006C"
            stroke="#000"
            strokeLinecap="square"
            strokeMiterlimit={3}
          >
            <path
              d="M738.542 400l47.768 97.059h-79.613l10.947 11.765-10.947 11.764h79.613l-47.768 92.157h18.908l50.753-92.157 19.904-11.764-19.904-11.765L757.45 400h-18.908zM106.617 402.451L58.849 499.51h79.613l-10.947 11.765 10.947 11.764H58.849l47.768 92.157H87.709l-50.753-92.157-19.903-11.764 19.903-11.765 50.753-97.059h18.908z"
              vectorEffect="non-scaling-stroke"
            />
          </g>
          <path
            d="M425.207 76.471h4.038c10.44 0 18.915 8.475 18.915 18.915V900h-42.034V95.552c0-10.531 8.55-19.081 19.081-19.081z"
            fill="#3734e1"
            strokeMiterlimit={10}
          />
          <ellipse
            vectorEffect="non-scaling-stroke"
            cx={425}
            cy={27.451}
            rx={28.373}
            ry={27.451}
            fill="#3734E1"
          />
        </g>
      </svg>
      <text
        fontFamily="MetalOnMetal"
        fontWeight={400}
        fontSize={52}
        fill="#eee"
        transform="translate(280 360)"
      >
        {"Time Line"}
      </text>
      <g
        className={classes.warning}
        fontFamily="Philosopher"
        fontWeight={400}
        fontSize={56}
        fill="#d0728d"
      >
        <text transform="translate(350 480)">{"Click on"}</text>
        <text transform="translate(280 560)">{"Mini Hexagons"}</text>
        <text transform="translate(240 640)">{"To See The Magic"}</text>
      </g>
    </>
  );
}

export default EmptyContentStyles(EmptyContent);
