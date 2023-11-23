import React, { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CircleComponent from "./Circle";

const theme = createTheme({
  typography: {
    fontFamily: "'Manrope', sans-serif",
  },
});

const Technology = () => {
  const currentTheme = useTheme();
  const isMobileView = useMediaQuery(currentTheme.breakpoints.down("sm"));

  const [hoveredText, setHoveredText] = useState({
    heading: "Exploring the layers of a device",
    about: "Hover over each circle to learn more about its significance.",
  });

  const handleHover = (heading, about) => {
    setHoveredText({
      heading,
      about,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", width: "100%", height: "100vh" }}>
        <div
          style={{
            flex: "60%",
            marginTop: "2rem",
            paddingTop: "2rem",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircleComponent
            diameter="80vh"
            zIndex={1}
            text="Circle 1"
            bgColor="#246683"
            onMouseOver={() =>
              handleHover(
                "Application Layer",
                `Where user interaction happens, applications bring functionality and utility to the forefront. 
                Exposed to every software vulnerability and the most accessible layer.`
              )
            }
          />
          <CircleComponent
            diameter="55vh"
            zIndex={2}
            text="Circle 2"
            bgColor="#3582a3"
            onMouseOver={() =>
              handleHover(
                "Operating System Layer",
                `Providing a user interface and managing resources, the operating system is the device's orchestrator. 
                  Pose risks of password exposure to sophisticated malware and exploits.`
              )
            }
          />
          <CircleComponent
            diameter="35vh"
            zIndex={2}
            text="Circle 3"
            bgColor="#4998ba"
            onMouseOver={() =>
              handleHover(
                "Kernel Layer",
                `At the core, the kernel manages essential tasks, serving as the bridge between hardware and software. 
                Similar levels of vulnerabilities as Hardware, but least accessible.`
              )
            }
          />
          <CircleComponent
            diameter="15vh"
            zIndex={2}
            text="Circle 4"
            bgColor="#74bede"
            onMouseOver={() =>
              handleHover(
                "Hardware Layer",
                `The fundamental building blocks, the tangible hardware components of a device. 
                Only vulnerable to physical attacks, accessible only through private calls.`
              )
            }
          />
        </div>

        <div
          style={{
            marginTop: "2rem",
            paddingTop: "2rem",
            padding: "2rem",
            flex: "40%",
            position: "relative",
            overflow: "auto",
          }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "white",
                fontSize: "1.8rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              {hoveredText.heading}
            </p>
            <p
              style={{
                color: "white",
                fontSize: "1.2rem",
                textAlign: "center",
              }}
            >
              {hoveredText.about}
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Technology;
