import React from "react";
import FullInformationStyles from "./FullInformation.style";

const DATE_OPTIONS = {
  year: "numeric",
  month: "long",
  day: "numeric"
};

function FullInformation(props) {
  const { classes, eventData, onClose } = props;
  if (!eventData) {
    return null;
  }
  const { title, description, date, imageUrl } = eventData;
  return (
    <div className={classes.rootContainer} onClick={onClose || (() => null)}>
      <div className={classes.close}>
        <p>X</p>
      </div>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.date}>
        {new Date(date).toLocaleDateString("en-US", DATE_OPTIONS)}
      </p>
      <img alt="" src={imageUrl} className={classes.image} />
      <p className={classes.description}>{description}</p>
    </div>
  );
}

export default FullInformationStyles(FullInformation);
