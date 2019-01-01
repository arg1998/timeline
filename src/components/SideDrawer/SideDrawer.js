import React from "react";
import classNames from "classnames";
import propType from "prop-types";
import BackDrop from "../BackDrop/BackDrop";
import sideDrawerStyle from "./SideDrawer.style";


const SideDrawer = props => {
  const {
    open,
    onClose,
    side,
    classes,
    shouldCloseOnDrawerClick,
    shouldCloseOnBackDropClick
  } = props;
 

  return (
    <>
      <div
        className={classNames({
          [classes.sideDrawer]: true,
          [classes.open]: open,
          [classes.close]: !open,
          [classes.leftSide]: side === "left",
          [classes.rightSide]: side === "right"
        })}
        onClick={shouldCloseOnDrawerClick ? onClose : null}
      />
      <BackDrop open={open} onClick={shouldCloseOnBackDropClick ? onClose : null} />
    </>
  );
};

SideDrawer.propTypes = {
  open: propType.bool.isRequired,
  side: propType.oneOf(["left", "right"]).isRequired,
  onClose: propType.func,
  shouldCloseOnDrawerClick: propType.bool,
  shouldCloseOnBackDropClick: propType.bool
};
SideDrawer.defaultProps = {
  onClose: null,
  shouldCloseOnDrawerClick: false,
  shouldCloseOnBackDropClick: true
};
export default sideDrawerStyle(SideDrawer);
