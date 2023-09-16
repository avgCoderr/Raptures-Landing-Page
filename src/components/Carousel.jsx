import React, { useState, useEffect } from "react";
import "./Carousel.css";

// import img1 from "../assets/discord1.svg";
// import img2 from "../assets/discord2.svg";
import img3 from "../assets/mockups.png";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel">
        <img src={img3} alt="Image 1" />
      </div>
    </div>
  );
};

export default Carousel;
