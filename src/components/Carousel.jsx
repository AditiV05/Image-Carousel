import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }

  handlePrevClick = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + images.length) % images.length,
    }));
  };

  handleNextClick = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % images.length,
    }));
  };

  render() {
    const { currentIndex } = this.state;

    return (
      <div className="carousel-container">
        <ArrowBackIosIcon onClick={this.handlePrevClick} className="arrow" />
        <img src={images[currentIndex]} alt={`slide ${currentIndex}`} />
        <ArrowForwardIosIcon onClick={this.handleNextClick} className="arrow" />
      </div>
    );
  }
}

export default Carousel;
