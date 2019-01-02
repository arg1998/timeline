import React from "react";
import FullInformationStyles from "./FullInformation.style";

const DATE_OPTIONS = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

function FullInformation(props) {
  const { classes, title, description, date, imageUrl, onClose } = props;
  return (
    <div className={classes.rootContainer}>
      <div className={classes.close} onClick={onClose || (() => null)}>
        <p>X</p>
      </div>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.date}>
        {date.toLocaleDateString("en-US", DATE_OPTIONS)}
      </p>
      <img alt="" src={imageUrl} className={classes.image} />
      <p className={classes.description}>{description}</p>
    </div>
  );
}

export default FullInformationStyles(FullInformation);
