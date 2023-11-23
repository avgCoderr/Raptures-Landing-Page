// CircleComponent.js
import React from "react";
import { styled } from "@mui/system";

const Circle = styled("div")({
  position: "absolute",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.1)", 
    boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.5)", 
  },
});

const CircleComponent = ({ diameter, zIndex, bgColor, onMouseOver }) => {
  return (
    <Circle
      style={{
        width: diameter,
        height: diameter,
        zIndex,
        backgroundColor: bgColor,
      }}
      onMouseOver={() => {
        onMouseOver();
      }}
    ></Circle>
  );
};

export default CircleComponent;
