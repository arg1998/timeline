import React from "react";
import TelegramImg from "../../res/images/telegram.svg";
import withSizes from "react-sizes";
import bp from "../../utils/BreakPoints";

function Telegram(props) {
  const { isDesktop } = props;
  return (
    <>
      <img
        style={{
          width: isDesktop ? 30 : 25,
          height: isDesktop ? 30 : 25,
          marginLeft: 15
        }}
        src={TelegramImg}
      />
    </>
  );
}
const mapSizesToProps = ({ width, height }) => ({
  isDesktop: width > bp.desktop.minWidth,
  screen: { w: width, h: height }
});

export default withSizes(mapSizesToProps)(Telegram);
