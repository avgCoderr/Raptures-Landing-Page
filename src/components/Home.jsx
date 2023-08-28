import React from "react";
import {
  Box,
  Typography,
  Button,
  ThemeProvider,
  Container,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { createTheme, useTheme } from "@mui/material/styles";

import NotStartedOutlinedIcon from "@mui/icons-material/NotStartedOutlined";
import VideocamIcon from "@mui/icons-material/Videocam";

import image from "../assets/discord-bot.png";

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
              {/* Content on the left, 6 columns for large screens */}
              <Grid item xs={12} lg={6}>
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
                      sx={{ paddingRight: "3rem", paddingLeft: "3rem" }}
                    >
                      START
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<VideocamIcon />}
                      sx={{ paddingRight: "3rem", paddingLeft: "3rem" }}
                    >
                      DEMO
                    </Button>
                  </Box>
                </Box>
              </Grid>
                <Grid item xs={12} lg={6}>
              <Box sx={{display: "flex", alignItems: "center"}}>
                  <img
                    src={image}
                    alt="Logo"
                    style={{
                      width: "100%",
                      height: "auto",
                      marginTop: "2rem",
                      marginBottom: "4rem",
                    }}
                  />
              </Box>
                </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HomeScreen;
