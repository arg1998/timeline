import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import withSizes from "react-sizes";
import MobileStyles from "../Mobile/MobileLayout.style";
import ParticleBackground from "../../../components/ParticleBackground/ParticleBackground";
import AbstractHexagon from "../../../components/AbstractHexagon/AbstractHexagon";
import FirstHexagon from "../../../components/Hexagons/FirstHexagon/FirstHexagon";
import SecondHexagon from "../../../components/Hexagons/SecondHexagon/SecondHexagon";
import ThirdHexagon from "../../../components/Hexagons/ThirdHexagon/ThirdHexagon";
import FourthHexagon from "../../../components/Hexagons/FourthHexagon/FourthHexagon";
import injectSheet from "react-jss";
import PrevAndNext from "../../../components/SliderArrow/Arrow.style";
import classNames from "classnames";

const Arrow = props => {
  const { classes, className, style, onClick, side } = props;

  return (
    <div
      style={{ ...style }}
      onClick={onClick}
      className={classNames({
        [className]: true,
        [classes.isNext]: side === "next",
        [classes.isPrev]: side === "prev"
      })}
    />
  );
};
const ArrowStyled = injectSheet(PrevAndNext)(Arrow);

class MobileLayout extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <ArrowStyled side="next" />,
      prevArrow: <ArrowStyled side="prev" />,

      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            infinite: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            centerMode: true
          }
        }
      ]
    };

    const { classes, aspectRatio } = this.props;
    if (aspectRatio >= 1) {
      return <p>use this website in portrait Mode please</p>;
    }
    return (
      <div>
        <ParticleBackground count={50} />
        <div className={classes.mobileContainer}>
          <div className={classes.main}>
            <AbstractHexagon width="100%" height="100%" />
          </div>

          <div className={classes.bottomSide}>
            <Slider className={classes.sliderStyle} {...settings}>
              <FirstHexagon width="25vh" height="25vh" />

              <SecondHexagon width="25vh" height="25vh" />

              <ThirdHexagon width="25vh" height="25vh" />

              <FourthHexagon width="25vh" height="25vh" />
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapScreenSizesToProps = ({ width, height }) => ({
  width,
  height,
  aspectRatio: width / height
});

export default withSizes(mapScreenSizesToProps)(MobileStyles(MobileLayout));
