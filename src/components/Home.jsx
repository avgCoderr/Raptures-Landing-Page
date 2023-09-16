import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  ThemeProvider,
  Container,
  Grid,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import { createTheme, useTheme } from "@mui/material/styles";

import NotStartedOutlinedIcon from "@mui/icons-material/NotStartedOutlined";
import VideocamIcon from "@mui/icons-material/Videocam";

import "./Carousel.css";
import Carousel from "./Carousel";

const theme = createTheme({
  typography: {
    fontFamily: "'Manrope', sans-serif",
  },
});

const HomeScreen = () => {
  const parentBoxStyle = {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100vh",
    position: "relative",
  };

  const currentTheme = useTheme();
  const isMobileView = useMediaQuery(currentTheme.breakpoints.down("sm"));

  const titleFontSize = isMobileView ? "2rem" : "3rem";
  const descriptionFontSize = isMobileView ? "1.2rem" : "1.5rem";

  const contentStyle = {
    padding: isMobileView ? "1rem" : "2rem",
    color: "white",
  };

  const titleStyle = {
    marginBottom: "1rem",
    fontSize: titleFontSize,
    fontWeight: "bold",
    color: "white",
  };

  const descriptionStyle = {
    fontSize: descriptionFontSize,
    fontWeight: 50,
    marginBottom: "2rem",
  };

  const buttonsContainerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box sx={parentBoxStyle}>
          <Container maxWidth="lg">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} lg={5}>
                <Box sx={contentStyle}>
                  <Typography variant="h1" sx={titleStyle}>
                    Forget what you knew about Web3 wallets.
                  </Typography>
                  <Typography variant="body2" sx={descriptionStyle}>
                    Convert your social media accounts into gateways to the Web3
                    world.
                  </Typography>
                  <Typography variant="body2" sx={descriptionStyle}>
                    Now available on Discord!
                  </Typography>
                  <Box sx={buttonsContainerStyle}>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<NotStartedOutlinedIcon />}
                      sx={{ paddingRight: "1rem", paddingLeft: "1rem" }}
                      component="a"
                      href="https://discord.gg/epy5uPXp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      RAPTURES BOT
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<VideocamIcon />}
                      sx={{ paddingRight: "2rem", paddingLeft: "2rem" }}
                    >
                      DEMO
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={7}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Carousel />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* Footer */}
        <Box
          sx={{
            background:
              "var(--glass, radial-gradient(151.92% 127.02% at 15.32% 20%, rgba(159, 217, 255, 0.04) 100%, rgba(70, 144, 212, 0.00) 10%))",
            backdropFilter: "blur(100px)",
            padding: "1rem",
            color: "white",
          }}
        >
          <Container maxWidth="lg">
            <Tooltip title="raptures.company@gmail.com" arrow>
              <Typography variant="body2" align="center">
                &copy; 2023 Raptures. Made with love.
              </Typography>
            </Tooltip>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HomeScreen;
