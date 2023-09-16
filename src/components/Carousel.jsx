import React, { useState, useEffect } from "react";
import "./Carousel.css";
import img3 from "../assets/mockups.png";

const Carousel = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img src={img3} alt="Image 1" className={showImage ? "show" : ""} />
      </div>
    </div>
  );
};

export default Carousel;
