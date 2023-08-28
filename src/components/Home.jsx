import React from "react";
import { Box, Typography, Button } from "@mui/material";

import NotStartedOutlinedIcon from "@mui/icons-material/NotStartedOutlined";
import VideocamIcon from "@mui/icons-material/Videocam";

import image from "../assets/discord-bot.png";

const HomeScreen = () => {
  const parentBoxStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100vh",
    margin: "0rem 5rem 0rem 4rem",
    position: "relative",
    fontFamily: "Manrope, sans-serif"
  };

  const contentStyle = {
    padding: "4rem",
    paddingRight: "8rem",
    color: "white",
  };

  const titleStyle = {
    marginBottom: "1rem",
    fontSize: "3rem",
    fontWeight: "bold",
    color: "white",
  };

  const descriptionStyle = {
    fontSize: "1.5rem",
    fontWeight: 50,
    marginBottom: "3rem",
  };

  const buttonsContainerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
  };

  return (
    <Box>
      <Box sx={parentBoxStyle}>
        <Box sx={contentStyle}>
          <Typography variant="h1" sx={titleStyle}>
            Forget what you knew about Web3 wallets.
          </Typography>
          <Typography variant="body1" sx={descriptionStyle}>
            Convert your social media accounts into gateways to the Web3 world. 
          </Typography>
          <Typography variant="body1" sx={descriptionStyle}>
            Now available on Discord
          </Typography>
          <Box sx={buttonsContainerStyle}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<NotStartedOutlinedIcon />}
            >
              START
            </Button>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<VideocamIcon />}
            >
              DEMO
            </Button>
          </Box>
        </Box>
        <img src={image} alt="Logo" style={{ height: "auto" }} />
      </Box>
    </Box>
  );
};

export default HomeScreen;
