import React from "react";

function SocialMedia(props) {
  const { isDesktop, link, type } = props;
  let image = null;
  if (type === "telegram") {
    image = "/img/telegram.svg";
  } else if (type === "instagram") {
    image = "/img/instagram.svg";
  } else if (type === "gmail") {
    image = "/img/gmail.svg";
  } else if (type === "linkedin") {
    image = "/img/linkedin.svg";
  } else {
    return null;
  }

  return (
    <a href={link}>
      <img
        alt=""
        style={{
          width: isDesktop ? 30 : 25,
          height: isDesktop ? 30 : 25,
          marginLeft: 15
        }}
        src={image}
      />
    </a>
  );
}

export default SocialMedia;
