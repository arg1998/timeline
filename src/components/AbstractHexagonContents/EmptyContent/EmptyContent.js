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

      <g
        className={classes.warning}
        fontFamily="Philosopher"
        fontWeight={400}
        fontSize={52}
        fill="#d0728d"
      >
        <text transform="translate(360 350)">{"Click on"}</text>
        <text transform="translate(300 430)">{"Mini Hexagons"}</text>
        <text transform="translate(270 510)">{"To See The Magic"}</text>
      </g>
    </>
  );
}

export default EmptyContentStyles(EmptyContent);
