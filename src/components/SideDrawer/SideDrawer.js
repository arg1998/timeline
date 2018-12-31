import React from "react";
import classNames from "classnames";
import propType from "prop-types";
import BackDrop from "../../containers/BackDrop/BackDrop";
import sideDrawerStyle from "./SideDrawer.style";

//TODO: Animations are not Included
const SideDrawer = props => {
  const {
    open,
    onClose,
    side,
    classes,
    shouldCloseOnDrawerClick,
    shouldCloseOnBackDropClick
  } = props;
  if (!open) {
    return null;
  }

  return (
    <>
      <div
        className={classNames({
          [classes.sideDrawer]: true,
          [classes.leftSide]: side === "left",
          [classes.rightSide]: side === "right"
        })}
        onClick={shouldCloseOnDrawerClick ? onClose : null}
      />
      <BackDrop onClick={shouldCloseOnBackDropClick ? onClose : null} />
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
