import React, { Component } from "react";
import Slider from "react-slick";
import classNames from "classnames";
import withSizes from "react-sizes";
import injectSheet from "react-jss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobileStyles from "../Mobile/MobileLayout.style";
import ParticleBackground from "../../../components/ParticleBackground/ParticleBackground";
import AbstractHexagon from "../../../components/AbstractHexagon/AbstractHexagon";
import FirstHexagon from "../../../components/Hexagons/FirstHexagon/FirstHexagon";
import SecondHexagon from "../../../components/Hexagons/SecondHexagon/SecondHexagon";
import ThirdHexagon from "../../../components/Hexagons/ThirdHexagon/ThirdHexagon";
import FourthHexagon from "../../../components/Hexagons/FourthHexagon/FourthHexagon";
import PrevAndNext from "../../../components/SliderArrow/Arrow.style";

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
  state = { activeIndex: 0 };
  _handleScrollEvent = index => {
    if (this.state.activeIndex === index) {
      return;
    }
    this.setState({ activeIndex: index });
  };

  render() {
    const { classes, aspectRatio } = this.props;
    const { activeIndex } = this.state;

    const settings = {
      mobileFirst: true,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <ArrowStyled side="next" />,
      prevArrow: <ArrowStyled side="prev" />
    };

    if (aspectRatio >= 1) {
      return <p>use this website in portrait Mode please</p>;
    }

    return (
      <div>
        <ParticleBackground count={50} touch={false} />
        <div className={classes.mobileContainer}>
          <div className={classes.main}>
            <AbstractHexagon
              width="100%"
              height="100%"
              activeIndex={activeIndex}
            />
          </div>

          <div className={classes.bottomSide}>
            <Slider
              className={classes.sliderStyle}
              afterChange={this._handleScrollEvent}
              {...settings}
            >
              <FirstHexagon
                width="25vh"
                height="25vh"
                active={activeIndex === 0}
              />

              <SecondHexagon
                width="25vh"
                height="25vh"
                active={activeIndex === 1}
              />

              <ThirdHexagon
                width="25vh"
                height="25vh"
                active={activeIndex === 2}
              />

              <FourthHexagon
                width="25vh"
                height="25vh"
                active={activeIndex === 3}
              />
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
