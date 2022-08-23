import React from "react";

function Carousel() {
  return (
    <div className="wrapper">
      <div className="carousel">
        <ul className="slides">
          <input type="radio" name="radio-buttons" id="img-1" checked />
          <li className="slide-container">
            <div className="slide-image">
              <img src="../slider/slider-img-1.jpg" />
            </div>
            <div className="carousel-controls">
              <label for="img-3" className="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label for="img-2" className="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id="img-2" />
          <li className="slide-container">
            <div className="slide-image">
              <img src="../slider/slider-img-2.jpg" />
            </div>
            <div className="carousel-controls">
              <label for="img-1" className="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label for="img-3" className="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id="img-3" />
          <li className="slide-container">
            <div className="slide-image">
              <img src="../slider/slider-img-3.jpg" />
            </div>
            <div className="carousel-controls">
              <label for="img-2" className="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label for="img-1" className="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          {/* <div className="carousel-dots">
              <label for="img-1" className="carousel-dot" id="img-dot-1"></label>
              <label for="img-2" className="carousel-dot" id="img-dot-2"></label>
              <label for="img-3" className="carousel-dot" id="img-dot-3"></label>
            </div> */}
        </ul>
      </div>
    </div>
  );
}

export default Carousel;
