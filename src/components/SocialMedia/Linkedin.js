import React from "react";
import LinkedinImg from "../../res/images/linkedin.svg";
import withSizes from "react-sizes";
import bp from "../../utils/BreakPoints";

function Linkedin(props) {
  const { isDesktop } = props;
  return (
    <>
      <img
        style={{
          width: isDesktop ? 30 : 25,
          height: isDesktop ? 30 : 25,
          marginLeft: 15
        }}
        src={LinkedinImg}
      />
    </>
  );
}
const mapSizesToProps = ({ width, height }) => ({
  isDesktop: width > bp.desktop.minWidth,
  screen: { w: width, h: height }
});

export default withSizes(mapSizesToProps)(Linkedin);
