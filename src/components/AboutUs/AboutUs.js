import React from "react";
import { AboutUsStyle, DeveloperStyle } from "./AboutUs.style";
import bp from "../../utils/BreakPoints";
import withSizes from "react-sizes";

import SocialMedia from "../SocialMedia/SocialMedia";

let Developer = props => {
  const { classes, name, bio, image, isDesktop, socialMedia } = props;
  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <img alt="" src={image} className={classes.image} />
      </div>
      <div className={classes.content}>
        {/* content */}
        <div className={classes.textArea}>
          <p className={classes.name}>{name}</p>
          <p className={classes.bio}>{bio}</p>
        </div>
        <div className={classes.socialMedia}>
          {socialMedia.map(sm => (
            <SocialMedia type={sm.type} link={sm.link} key={sm.type} />
          ))}
        </div>
        <div className={classes.line} />
      </div>
    </div>
  );
};

Developer = DeveloperStyle(Developer);

function AboutUs(props) {
  const { classes, isDesktop } = props;

  return (
    <>
      <div className={classes.navBar}>
        <img className={classes.logo} alt="" src="/logo.png" />
        <p className={classes.timeline}>{"T i m e    L i n e"}</p>
      </div>
      <div className={classes.container}>
        <h3 className={classes.who}>Who Built This Amazing Website?</h3>
        <div className={classes.content}>
          <Developer
            isDesktop={isDesktop}
            name="Amir Reza Ghorbani"
            bio="Student at University Of Tehran, studying computer engineering.
            He loves graphics programming and making games from scratch. Now, his
            focus is on AI and deep learning, specially Computer Vision. He's
            enthusiastic about back-end engineering and Dev-Ops."
            image="/img/amir.jpg"
            socialMedia={[
              {
                type: "telegram",
                link: "http://t.me/ARG_1998"
              },
              {
                type: "gmail",
                link: "mailto:arg7971@gmail.com"
              },
              {
                type: "linkedin",
                link: "https://www.linkedin.com/in/ARG1998/"
              }
            ]}
          />
          <Developer
            isDesktop={isDesktop}
            name="Shima Shiuey"
            bio="Student at University Of Tehran, studying computer engineering.
            He loves graphics programming and making games from scratch. Now, his
            focus is on AI and deep learning, specially Computer Vision. He's
            enthusiastic about back-end engineering and Dev-Ops."
            image="/img/shima.jpeg"
            socialMedia={[
              {
                type: "telegram",
                link: "http://t.me/ARG_1998"
              },
              {
                type: "gmail",
                link: "mailto:arg7971@gmail.com"
              },
              {
                type: "linkedin",
                link: "https://www.linkedin.com/in/ARG1998/"
              }
            ]}
          />
          <Developer
            isDesktop={isDesktop}
            name="Shakila Rahban"
            bio="Student at University Of Tehran, studying computer engineering.
            He loves graphics programming and making games from scratch. Now, his
            focus is on AI and deep learning, specially Computer Vision. He's
            enthusiastic about back-end engineering and Dev-Ops."
            image="/img/shakila.jpg"
            socialMedia={[
              {
                type: "telegram",
                link: "http://t.me/shakilaaarbn"
              },
              {
                type: "gmail",
                link: "mailto:arg7971@gmail.com"
              },
              {
                type: "linkedin",
                link: "https://www.linkedin.com/in/ARG1998/"
              }
            ]}
          />
        </div>
      </div>
    </>
  );
}

const mapSizesToProps = ({ width, height }) => ({
  isDesktop: width > bp.desktop.minWidth
});

export default withSizes(mapSizesToProps)(AboutUsStyle(AboutUs));
