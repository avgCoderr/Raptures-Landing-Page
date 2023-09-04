import React, { useState, useEffect } from "react";
import "./Carousel.css";

import img1 from "../assets/discord1.svg";
import img2 from "../assets/discord2.svg";

const Carousel = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        <img src={img1} alt="Image 1" />
        <img src={img2} alt="Image 2" />
      </div>
    </div>
  );
};

export default Carousel;
