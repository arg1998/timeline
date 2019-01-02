import React from "react";
import InstagramImg from "../../res/images/instagram.svg";
import withSizes from "react-sizes";
import bp from "../../utils/BreakPoints";

function Instagram(props) {
  const { isDesktop } = props;
  return (
    <>
      <img
        style={{ width: isDesktop ? 30 : 25, height: isDesktop ? 30 : 25 }}
        src={InstagramImg}
      />
    </>
  );
}
const mapSizesToProps = ({ width, height }) => ({
  isDesktop: width > bp.desktop.minWidth,
  screen: { w: width, h: height }
});

export default withSizes(mapSizesToProps)(Instagram);
