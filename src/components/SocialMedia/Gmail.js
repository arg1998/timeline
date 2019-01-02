import React from "react";
import withSizes from "react-sizes";
import bp from "../../utils/BreakPoints";

import GmailImg from "../../res/images/gmail.svg";
function Gmail(props) {
  const { isDesktop } = props;
  return (
    <>
      <img
        style={{
          width: isDesktop ? 30 : 25,
          height: isDesktop ? 30 : 25,
          marginLeft: 15
        }}
        src={GmailImg}
      />
    </>
  );
}

const mapSizesToProps = ({ width, height }) => ({
  isDesktop: width > bp.desktop.minWidth,
  screen: { w: width, h: height }
});

export default withSizes(mapSizesToProps)(Gmail);
