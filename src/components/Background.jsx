import React from "react";
import { Box } from "@mui/material";

import "./Background.css";

const Background = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#12141F",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      <div
        className="circle"
        style={{
          position: "absolute",
          width: "647.907px",
          height: "926.171px",
          borderRadius: "50%",
          backgroundColor: "rgba(65, 55, 126, 0.40)",
          filter: "blur(150px)",
          top: "-10%",
          left: "10%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      <div
        className="circle"
        style={{
          position: "absolute",
          width: "647.907px",
          height: "926.171px",
          borderRadius: "50%",
          backgroundColor: "rgba(74, 212, 255, 0.15)",
          filter: "blur(150px)",
          top: "-15%",
          right: "5%",
          transform: "translate(50%, 50%)",
        }}
      ></div>
    </Box>
  );
};

export default Background;
